var arr = [
    { dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60", story: "https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { dp: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { dp: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { dp: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }
];

var clutter = "";
arr.forEach(function (part, i) {
    clutter += `<div class="story">
       <img id="${i}" src="${part.dp}" alt="">
    </div>`;
});

document.querySelector(".stories").innerHTML = clutter;

document.querySelector(".stories").addEventListener("click", function (dets) {
    var val = arr[dets.target.id].story; // Use "id" instead of "i"
    document.querySelector(".full").style.display = "block";
    document.querySelector(".full").style.backgroundImage = `url(${val})`;
    setTimeout(function(){
        document.querySelector(".full").style.display="none";
    },3000)
});
