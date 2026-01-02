from PIL import Image
import os

directory = r"C:/Users/mehra/Kashmir Cascade/web/public/"
files = ["logo-white.png", "logo-black.png"]

def crop_image(file_name):
    try:
        file_path = os.path.join(directory, file_name)
        img = Image.open(file_path).convert("RGBA")
        
        # Get the bounding box of the non-zero regions
        bbox = img.getbbox()
        
        if bbox:
            cropped_img = img.crop(bbox)
            # Save it back to the same path, overwriting it
            cropped_img.save(file_path)
            print(f"Successfully cropped {file_name}. New size: {cropped_img.size}")
        else:
            print(f"No content found in {file_name} to crop.")
            
    except Exception as e:
        print(f"Error processing {file_name}: {e}")

if __name__ == "__main__":
    for f in files:
        crop_image(f)
