function navbar(){
    return `      
    <div class="navbar_left">
    <input type="checkbox" id="check" onclick=check()> 
   
    <label for="check">
        <i class="fa-solid fa-bars"></i>
    </label>
    <div class="navbar_logo">
        
        <img src="https://mv1ag.com/wp-content/uploads/2022/01/youtube-logo-5.png" alt="">
        <h1><a href="">YouTube</a></h1>
    </div>
</div>

<div class="navbar_middle">
    <div class="Search_middle">
    <input type="text" name="" id="search_box" oninput="degu(Value,1000)">
    
    <i class="fa-solid fa-magnifying-glass"></i>

    </div>
    <i class="fa-solid fa-microphone"></i>
</div>

<div class="navbar_right">
    <i class="fa-regular fa-square-plus"></i>
    <i class="fa-solid fa-bell"></i>
</div>`
}
export default navbar();
