import React from 'react'

import { Card, Icon, Image } from 'semantic-ui-react'

const MovieCard = ({data, onClick}) => (

  <Card onClick={()=>onClick(data.imdbID)}>
    {data.Poster != 'N/A' ? <Image src={data.Poster} /> :<Icon name='images outline' size='massive' />}
    <Card.Content>
      <Card.Header>{data.Title}</Card.Header>
      <Card.Meta>
        <span > {data.Year} </span>
      </Card.Meta>
      <Card.Description>{data.Plot}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='star' />
      </a>
    </Card.Content>
  </Card>
)

export const MovieSingleViewCard = ({data}) => (

// imdbID
  <Card centered >
     {data.Poster != 'N/A' ? <Image src={data.Poster} /> : <Icon name='images outline' size='massive' />}
    <Card.Content>
      <Card.Header>{data.Title}</Card.Header>
      <Card.Meta>
        <span > {data.Year} </span>
      </Card.Meta>
      <Card.Description>{data.Plot}</Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='star' />
        rating {data.imdbRating}

    </Card.Content>
  </Card>
)

export default MovieCard
