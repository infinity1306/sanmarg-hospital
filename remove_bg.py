from rembg import remove
from PIL import Image

input_path = 'public/logo.png'
output_path = 'public/logo.png'

input_img = Image.open(input_path)
output_img = remove(input_img)
output_img.save(output_path)
print("Background removed successfully!")
