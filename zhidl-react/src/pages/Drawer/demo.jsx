import React, { useState } from "react";
import classnames from "classnames";

import "./demo.less";

function Demo() {
    const [show, isShow] = useState(false);

    function getTransform() {
        if (!show) {
            return {
                transform: "translateY(100%)",
            };
        }
        return {
        };
    }
    return (
        <div>
            <div className="btn" onClick={() => isShow(true)}></div>

            <div
                className={classnames("drawer-parent", {
                    show,
                })}
            >
                <div className="mask" onClick={() => isShow(false)}></div>
                <div className="content" style={getTransform()}>
                    11111
                </div>
            </div>
        </div>
    );
}

export default Demo;
