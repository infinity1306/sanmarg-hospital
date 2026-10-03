import math
from PIL import Image

def remove_background(input_path, output_path, tolerance=30):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size
    
    # Get the background color from top-left pixel
    bg_color = pixels[0, 0]
    bg_r, bg_g, bg_b = bg_color[:3]
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # Calculate distance in RGB space
            distance = math.sqrt((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)
            
            if distance < tolerance:
                # Make it transparent
                pixels[x, y] = (r, g, b, 0)
                
    img.save(output_path)
    print("Simple background removal completed.")

if __name__ == "__main__":
    remove_background('public/logo.png', 'public/logo.png', tolerance=40)
