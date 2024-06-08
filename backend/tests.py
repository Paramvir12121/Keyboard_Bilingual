# Save this code as create_heatmap_svg.py and run it

import svgwrite

def create_heatmap(data, filename):
    dwg = svgwrite.Drawing(filename, profile='tiny', size=(200, 110))
    colors = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']

    # Creating a 7x5 grid for the heatmap
    for row in range(5):
        for col in range(7):
            color_index = data[row][col]
            rect = dwg.rect(insert=(col*20, row*20), size=(18, 18), rx=3, ry=3, fill=colors[color_index])
            dwg.add(rect)

    dwg.save()

# Example data: 5 weeks (rows) and 7 days (columns)
# 0 - no activity, 4 - max activity
example_data = [
    [0, 1, 2, 3, 4, 0, 1],
    [1, 2, 3, 4, 0, 1, 2],
    [2, 3, 4, 0, 1, 2, 3],
    [3, 4, 0, 1, 2, 3, 4],
    [4, 0, 1, 2, 3, 4, 0]
]

create_heatmap(example_data, 'heatmap.svg')
