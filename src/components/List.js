import React from "react";

const List = ({results}) => {
    const processedList = results.map((item) => {
        return(
            <div key={item.pageid} className="ui segment">
                <h2>
                    <a href={"https://en.wikipedia.org?curid=" + item.pageid}
                    target="_blank"
                    rel="noreferrer"
                    className="header">{item.title}
                    </a>
                </h2>
                {/* <p>{item.snippet}</p> */}
                <p dangerouslySetInnerHTML={{__html: item.snippet}}></p>
            </div>
        );
    });
    return processedList;
}

export default List;
