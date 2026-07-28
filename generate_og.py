import os
from PIL import Image, ImageDraw, ImageFont

def create_og_image():
    # Setup paths
    source_path = r"L:\The Shriks\TheShriks\theshriks.space\Spaceship.png"
    out_dir = r"L:\The Shriks\TheShriks\theshriks.space\shriks\public\brand"
    out_path = os.path.join(out_dir, "og-default.png")
    
    os.makedirs(out_dir, exist_ok=True)
    
    # 1200x630 dark background
    bg_color = (10, 10, 10)  # Very dark grey/black
    img = Image.new('RGB', (1200, 630), color=bg_color)
    
    # Open spaceship image
    if os.path.exists(source_path):
        spaceship = Image.open(source_path)
        
        # Calculate aspect ratio preserving resize
        target_width = 600
        target_height = int(spaceship.height * (target_width / spaceship.width))
        
        # Make sure it doesn't exceed height
        if target_height > 500:
            target_height = 500
            target_width = int(spaceship.width * (target_height / spaceship.height))
            
        spaceship = spaceship.resize((target_width, target_height), Image.Resampling.LANCZOS)
        
        # If the spaceship has an alpha channel, paste it properly
        if spaceship.mode in ('RGBA', 'LA') or (spaceship.mode == 'P' and 'transparency' in spaceship.info):
            # We want to paste it on the right side
            paste_x = 1200 - target_width - 50
            paste_y = (630 - target_height) // 2
            img.paste(spaceship, (paste_x, paste_y), spaceship)
        else:
            paste_x = 1200 - target_width - 50
            paste_y = (630 - target_height) // 2
            img.paste(spaceship, (paste_x, paste_y))
            
    # Try to load a nice font, fallback to default
    try:
        font_large = ImageFont.truetype("arial.ttf", 72)
        font_medium = ImageFont.truetype("arial.ttf", 36)
        font_small = ImageFont.truetype("arial.ttf", 24)
    except:
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
        font_small = ImageFont.load_default()

    draw = ImageDraw.Draw(img)
    
    # Text coordinates
    x_offset = 80
    
    # Draw THE SHRIKS
    draw.text((x_offset, 220), "THE SHRIKS", fill=(255, 255, 255), font=font_large)
    
    # Draw Subtitle
    draw.text((x_offset, 320), "The Shriks - System Architectures", fill=(180, 180, 180), font=font_medium)
    
    # Draw Optional Text
    draw.text((x_offset, 500), "AI · SOFTWARE · CLOUD · BLOCKCHAIN", fill=(120, 120, 120), font=font_small)
    
    # Save optimized
    img.save(out_path, format="PNG", optimize=True)
    print(f"Saved OG image to {out_path}")

if __name__ == "__main__":
    create_og_image()
