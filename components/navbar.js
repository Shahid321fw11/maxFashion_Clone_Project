function navbar(){
    return `
    <!-- navbar upper-black part -->
    <div class="bg-black p-2 text-white ">   
    <div class="pl-7 font-semibold  inline-flex gap-4">
        <span class="flex gap-2 cursor-pointer">
            <div style="font-size: 24px;">
                <span class="iconify" data-icon="ic:outline-local-shipping"></span>
            </div>
            <div class="pr-7 cursor-pointer">Free Shipping</div>
        </span>
        <span class="flex gap-2 cursor-pointer">
            <div style="font-size: 24px;">
                <span class="iconify" data-icon="bx:bx-store"></span>
            </div>
            <div class="pr-7 cursor-pointer">Return To Store</div>
        </span>
        <span class="flex gap-2 cursor-pointer">
            <div style="font-size: 20px;">
                <span class="iconify" data-icon="fontisto:shopping-store"></span>
            </div>
            <div class="pr-7 cursor-pointer">Click & Collect</div>
        </span>
    </div>
    <div class="flex float-right text-sm pr-7">
        <div class=" cursor-pointer">Download Our Apps</div>
        <div style="border-left:2px solid grey;" class="mx-4"></div>
        <div class="cursor-pointer">Store Locator</div>
        <div style="border-left:2px solid grey;" class="mx-4"></div>
        <div class="cursor-pointer">Help</div>
    </div>
    </div>
    <!-- navbar lower part -->
    <div class="bg-gray-100 p-3 font-semibold">
        <div class="pl-6 inline-flex w-3/4">
            <div class="pt-3 w-25 mr-3 cursor-pointer">
                <img src="components\icons\logo.png" alt="" class="">
            </div>
            <div class="pr-7 pt-2 cursor-pointer">Women</div>
            <div class="pr-7 pt-2 cursor-pointer">Men</div>
            <div class="pr-7 pt-2 cursor-pointer">Girls</div>
            <div class="pr-7 pt-2 cursor-pointer">Boys</div>
            <input type="text" placeholder="What are you looking for? " class="max-w-lg min-w-lg container pl-4 h-10 bg-gray-200">
        </div>
        <div class="flex float-right">
            <div class="pr-7 pt-2 cursor-pointer hover:text-blue-800">Sign Up - Sign In</div>
            <div class=""></div>
            <div class="pr-6 pt-2 cursor-pointer flex gap-2">Basket
                <span class="iconify" data-icon="entypo:shopping-basket" style="font-size: 22px;"></span>
            </div>
        </div>
    </div>
    `
}

export default navbar();
