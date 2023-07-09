import subprocess

# Run the images.py script and capture its output
output = subprocess.check_output(["python", "images.py"])

# Extract the image URLs from the output (assuming one URL per line)
image_urls = output.decode().splitlines()

# Read the gallery template file
with open("gallery.html", "r") as file:
    template = file.read()

# Inject the image URLs into the template
rendered_gallery = template.replace("{{ image_urls }}", "\n".join(image_urls))

# Write the updated gallery file
with open("gallery.html", "w") as file:
    file.write(rendered_gallery)
