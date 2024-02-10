"use Client";
import React from "react";

export default function ProfileSearchKeyword({keywords}) {
    return (
        <div className="card card-bordered p-2 shadow-xl hover:bg-gray-200" >
            
            
            <div className="card-title">
                <h2 style={{ fontWeight: 'bold' }}>Search Appearance By Key Words</h2>
            </div>
                <br></br>
                <p>
                    <i>
                    <h6 className="text-blue-700">#{keywords[0]}</h6>
                    </i>
                </p>
                <progress className="progress progress-success w-96" value="95" max="100"></progress>
                <br></br> {/* Breakline */}
                <p>
                    <i>
                    <h6 className="text-blue-700">#{keywords[1]}</h6>    
                    </i>
                </p>
                <progress className="progress progress-success w-96" value="15" max="100"></progress>
                <br></br>
                <p>
                    <i>
                    <h6 className="text-blue-700">#{keywords[2]}</h6>
                    </i>
                </p>
                <progress className="progress progress-success w-96" value="50" max="100"></progress>
                <br></br>
                <p>
                    <i>
                    <h6 className="text-blue-700">#{keywords[3]}</h6>
                    </i>
                </p>
                <progress className="progress progress-success w-96" value="70" max="100"></progress>
                <br></br>
            
        </div>
    );
}
