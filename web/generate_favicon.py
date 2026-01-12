from PIL import Image
import os

def create_favicon(logo_path, output_path):
    try:
        # Open the logo
        img = Image.open(logo_path).convert("RGBA")
        
        # Get bounding box of content
        bbox = img.getbbox()
        if not bbox:
            print("No content found in logo")
            return
            
        # The logo has text at the bottom. The icon is at the top.
        # Let's crop just the icon. 
        # Based on logo-black.png, the icon is roughly the top 70% of the non-empty space.
        # However, a better way is to find the gap between icon and text.
        # For simplicity, let's crop the top part that is square-ish.
        
        width = bbox[2] - bbox[0]
        height = bbox[3] - bbox[1]
        
        # Crop the icon (assuming it's roughly square at the top)
        # We'll take a square from the top.
        side = min(width, height) # Use the smaller dimension to start a square
        icon_bbox = (bbox[0], bbox[1], bbox[0] + width, bbox[1] + int(height * 0.7)) # Estimate icon area
        
        icon_img = img.crop(icon_bbox)
        
        # Get new bbox for icon only
        icon_bbox_final = icon_img.getbbox()
        if icon_bbox_final:
            icon_img = icon_img.crop(icon_bbox_final)
            
        # Make it square by adding padding
        w, h = icon_img.size
        new_size = max(w, h)
        square_img = Image.new("RGBA", (new_size, new_size), (0, 0, 0, 0))
        square_img.paste(icon_img, ((new_size - w) // 2, (new_size - h) // 2))
        
        # Resize to standard favicon size (e.g., 32x32 or 64x64)
        favicon = square_img.resize((64, 64), Image.Resampling.LANCZOS)
        favicon.save(output_path)
        print(f"Favicon created at {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    logo = r"c:/Users/HP/Kashmir Cascade/Kashmir_Cascade/web/public/logo-white.png"
    output = r"c:/Users/HP/Kashmir Cascade/Kashmir_Cascade/web/public/favicon.png"
    create_favicon(logo, output)
