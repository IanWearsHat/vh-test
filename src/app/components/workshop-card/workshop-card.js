import React from 'react'
import './workshop-card.scss'

function WorkshopCard(workshop) {
    const {title, description, prereqs, recording, host} = workshop;
    var preqs = [];
    if (prereqs) {
        preqs.push(<h5>Prequisites:</h5>);
        for (var i = 0; i < prereqs.length; i++) {
            if(prereqs[i].link){
                preqs.push(
                    <a href={prereqs[i].link} target="_blank" rel="noopener noreferrer">
                        {prereqs[i].description}
                    </a>
                );
            }
            else{
                preqs.push(<p>{prereqs[i].description}</p>);
            }
        }
    }

    return (
        <div className="workshop-card">
            <div className="workshop-card-header">
                <h4>{title}</h4>
                {recording && 
                    <a href={recording} target="_blank" rel="noopener noreferrer">
                        Recording
                    </a>
                }
            </div>
            <h5>
                Hosted by <a href={host.link} target="_blank" rel="noopener noreferrer">{host.name}</a>
            </h5>
            {description}
            <div className="workshop-card-prereqs">
                {preqs}
            </div>
        </div>
    )
}

export default WorkshopCard;