import React from "react";

const FurnitureView = () => {
  return (
    <>
      <div class="relative w-[600px] h-[300px] overflow-hidden rounded-lg">
        {/* <!-- Radios --> */}

        <input
          type="radio"
          name="slide"
          id="s1"
          class="hidden peer/s1"
          checked
        />
        <input type="radio" name="slide" id="s2" class="hidden peer/s2" />
        <input type="radio" name="slide" id="s3" class="hidden peer/s3" />

        {/* <!-- Slides --> */}

        <div
          class="flex w-[300%] h-full transition-transform duration-700 ease-in-out
                    peer-checked/s1:translate-x-[0%] 
                    peer-checked/s2:-translate-x-[33.33%] 
                    peer-checked/s3:-translate-x-[66.66%]"
        >
          <img src="/6.jpg" class="w-[100%] h-[100%] object-cover" />
          <img src="/7.jpg" class="w-[100%] h-[100%] object-cover" />
          <img src="/9.jpg" class="w-[100%] h-[100%] object-cover" />
        </div>

        {/* <!-- Navigation Dots --> */}

        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          <label
            for="s1"
            class="w-4 h-4 rounded-full bg-white cursor-pointer hover:bg-pink-500"
          ></label>
          <label
            for="s2"
            class="w-4 h-4 rounded-full bg-white cursor-pointer hover:bg-pink-500"
          ></label>
          <label
            for="s3"
            class="w-4 h-4 rounded-full bg-white cursor-pointer hover:bg-pink-500"
          ></label>
        </div>
      </div>
    </>
  );
};

export default FurnitureView;
