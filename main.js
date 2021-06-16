var canvas = new fabric.Canvas("myCanvas");

block_height = 30;
block_width = 30;

player_x = 500;
player_y = 300;

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_img_object = Img;
    block_img_object.scaleToWidth(block_img_width);
    block_img_object.scaleToHeight(block_img_height);
    block_img_object.set({
        top:player_y,
        left:player_x
    });