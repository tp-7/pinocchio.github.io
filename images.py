import requests
from bs4 import BeautifulSoup

# Make a GET request to the website
url = "https://dankset.io/by/1DGstezxYXU5sR1sDHRqBHXZZkkXnxnN5x"
response = requests.get(url)

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")

# Find the relevant elements on the webpage
artworks = soup.find_all("div", class_="artwork")

# Initialize an empty list to store the image URLs
image_urls = []

# Iterate over the artworks and extract the image URLs
for artwork in artworks:
    image_url = artwork.find("img")["src"]
    image_urls.append(image_url)

# Print the extracted image URLs
for url in image_urls:
    print(url)
