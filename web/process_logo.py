from PIL import Image

# Path to the generated logo
input_path = r"C:/Users/mehra/.gemini/antigravity/brain/d76e2bfc-b43c-408e-b6f3-c7911af57287/kashmir_cascade_logo_minimal_1767353726340.png"
output_dir = r"C:/Users/mehra/Kashmir Cascade/web/public/"

def process_logos():
    try:
        # Open the image
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        # Create White Logo (Transparent Background)
        new_data_white = []
        for item in datas:
            # Assuming black background (low RGB values), make it transparent
            # Adjust threshold as needed, strictly black is (0,0,0)
            if item[0] < 50 and item[1] < 50 and item[2] < 50:
                new_data_white.append((255, 255, 255, 0)) # Transparent
            else:
                new_data_white.append((255, 255, 255, 255)) # Pure White
        
        img_white = Image.new("RGBA", img.size)
        img_white.putdata(new_data_white)
        img_white.save(output_dir + "logo-white.png", "PNG")
        print("Created logo-white.png")

        # Create Black Logo (Transparent Background)
        new_data_black = []
        for item in datas:
             # Same check for background
            if item[0] < 50 and item[1] < 50 and item[2] < 50:
                new_data_black.append((0, 0, 0, 0)) # Transparent
            else:
                new_data_black.append((0, 0, 0, 255)) # Pure Black

        img_black = Image.new("RGBA", img.size)
        img_black.putdata(new_data_black)
        img_black.save(output_dir + "logo-black.png", "PNG")
        print("Created logo-black.png")

    except Exception as e:
        print(f"Error processing images: {e}")

if __name__ == "__main__":
    process_logos()
