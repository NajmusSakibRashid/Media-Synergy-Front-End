import React from "react";

export default function CardButtonContent({ children,id }) {
    return (
        <li>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className={`timeline-${(id%2==0)?'start':'end'} md:text-end mb-10`}>
                <time className="font-mono italic">{children.date}</time>
                <div className="text-lg font-black">{children.title}</div>
                <div>{children.description}</div>
                {children.media.length&&children.media[0].length ? <img src={children.media[0]} alt="media" className="rounded-lg" /> : null}
                <button onClick={(e)=>window.location.href=`/user/contents/${children._id}`} className="btn btn-primary mt-4">Details</button>
            </div>
            <hr />
        </li>
    );
}