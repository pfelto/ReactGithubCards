import React from 'react';
import Card from './Card';

class CardList extends React.Component{

    render(){ 
        const {cards} = this.props;
        const theCards = cards.map((card,index) => 
        {
            return(
                <Card key={card.id} 
                name={card.name} 
                login={card.login} 
                url={card.html_url}
                pic={card.avatar_url}
                />
            );
        })
        return(theCards);
    }
}

export default CardList