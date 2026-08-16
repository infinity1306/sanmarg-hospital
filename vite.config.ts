import { defineConfig, type PluginOption, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'
import type { IncomingMessage, ServerResponse } from 'http'

// Define extended types for req/res
interface CustomReq extends IncomingMessage {
  body?: any;
}
interface CustomRes extends ServerResponse {
  json?: (data: any) => void;
  status?: (code: number) => CustomRes;
}

const customApiPlugin = (): PluginOption => ({
  name: 'custom-api',
  enforce: 'pre' as const,
  configureServer(server: ViteDevServer) {
    // Manually load .env variables into process.env in the main server process
    try {
      const envPath = path.resolve(process.cwd(), '.env');
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        envContent.split(/\r?\n/).forEach((line: string) => {
          const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
          if (match) {
            let key = match[1];
            let value = (match[2] || '').trim();
            if (value.startsWith('"') && value.endsWith('"')) {
              value = value.slice(1, -1);
            }
            process.env[key] = value;
          }
        });
      }
    } catch (e) {
      console.error('Failed to load .env manually in vite config:', e);
    }

    server.middlewares.use(async (req: CustomReq, res: CustomRes, next: Function) => {
      if (req.url && req.url.startsWith('/api/')) {
        const route = req.url.split('?')[0];
        const filePath = path.resolve(process.cwd(), `.${route}.js`);

        if (fs.existsSync(filePath)) {
          try {
            const fileUrl = pathToFileURL(filePath).href;
            const apiModule = await import(`${fileUrl}?t=${Date.now()}`);
            const handler = apiModule.default;

            res.status = (code: number) => {
              res.statusCode = code;
              return res;
            };
            res.json = (data: any) => {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            };

            let body = '';
            req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
            
            req.on('end', async () => {
              if (body) {
                try { req.body = JSON.parse(body); } catch (e) {}
              }
              try {
                await handler(req, res);
              } catch (err: unknown) {
                console.error('API execution error:', err);
                res.statusCode = 500;
                res.end(err instanceof Error ? err.toString() : String(err));
              }
            });
            return;
          } catch (err: unknown) {
            console.error('Failed to load API module:', err);
          }
        }
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    customApiPlugin(),
  ],
})
