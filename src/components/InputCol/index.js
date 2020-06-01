import React, { useState } from "react";

function InputCol(props) {
    const [price, setPrice] = useState({});

    return (        
        <div className="input-group mb-3 col-6">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="AM Price" 
                            onChange={e => setPrice(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button 
                                className="btn btn-outline-success" 
                                type="button" 
                                name={`${props.day.toLowerCase()}${props.time}`}
                                onClick={e => props.setChartInfo({...props.chartInfo, [e.target.name]: price})}
                                >
                                    Add
                                </button>
                        </div>
                    </div>
    )
}

export default InputCol;