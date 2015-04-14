additional_import_paths = [
    "./bower_components/normalize.scss",
    "./bower_components/Skeleton-Sass/scss"
]

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "/public/dist/css"
sass_dir = "/public/src/assets/styles"
#images_dir = '../assets/images/icons'
#generated_images_dir = '../static/images'

sass_options = {
    :sourcemap => true,
    :debug_info => false
}

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# set output style
output_style = :compressed
