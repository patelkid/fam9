var list_of_images=["https://cf.shopee.ph/file/f991dbed4fc5fb029ccd8dddf5ad4b6d","https://i.pinimg.com/736x/5a/fd/c2/5afdc2013ff4f4bcea8cbee3ff44a96b.jpg","https://www.seekpng.com/png/detail/57-575668_cute-brown-girl-standing-clipart-girl-clipart.png","https://www.clipartmax.com/png/middle/8-89057_cooking-mom-clipart-mom-cooking-clip-art.png","https://lh3.googleusercontent.com/proxy/-FgovIrIboV7RNsA3TJ6SEYgLEGbjw9-iGNAQSySePEdcfkg8bJ7RxpZtTs91qrhB3YBqF4dl1QvGkJTTbKupFTDO6-oplZwrnJCGqzwHKO25Cp-u_jZQrl7Rbzqnw0icy3XWnCVGBCVgoRg0hCb"];
var list_of_names=["Family Book","Mike","Kate","Mom","Dad"];
var i= 0;
function nextslide(){
    
    i++;   
    var family_array = 5
    if (i > family_array)
    {i=0;
    }
var updateimage =list_of_images[i];
var updatename =list_of_names[i];
document.getElementById("family_member_name").src=updateimage;

document.getElementById("family_id_image").innerHTML=updatename;
}

