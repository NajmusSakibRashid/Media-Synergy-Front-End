"use client";
import React from "react";

export default function CardButtonContent({ children }) {
    return (
        <li>
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-start md:text-end mb-10">
                <time class="font-mono italic">{children.date}</time>
                <div class="text-lg font-black">{children.title}</div>
                {children.description}
                <img src={children.media.length?children.media[0]:"https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png"} alt="" class="w-full" />
                <button class="btn btn-primary mt-4">{btn_name}</button>
            </div>
            <hr />
        </li>
    );
}