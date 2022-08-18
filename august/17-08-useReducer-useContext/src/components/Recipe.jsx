import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useId } from 'react';
import { Context } from '../Context';

export default function Recipe(props) {

  const {state, saveRecipe} = useContext(Context)
  
  const id = useId()

const savedItem = state.savedRecipes.includes(id)

  console.log(state.savedRecipes);

    return (
      <div className="recipe">
        <Card>
            <Card.Img src={props.recipe.img}/>
          <Card.Body>
            <Card.Title>{props.recipe.title}</Card.Title>
                <Card.Text>
                    {props.recipe.text}
                </Card.Text>
            <Button
              onClick={() => saveRecipe(id)}
              variant={savedItem?"success":"primary"}
            >
              {savedItem ? "Gespeichert" : "Speichern" }
            </Button>
            </Card.Body>
        </Card>
      </div>
    )
  };