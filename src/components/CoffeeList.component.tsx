import React from 'react'
import {CoffeeInterface} from "../models/coffee/Coffee.interface";
import {CoffeeItem} from "./coffee-item/CoffeeItem.component";

type Props = {
    coffee: CoffeeInterface[],
    onCoffeeSelect: (coffee: CoffeeInterface) => void
}
export const CoffeeListComponent: React.FC<Props> = (props: Props) => {

    const handleCoffeeEvent = (coffee: CoffeeInterface) => {
        console.log('Coffee Selected', coffee.id, coffee.favourite)
    }

    const onCoffeeSelect = (coffee: CoffeeInterface) => {
        props.onCoffeeSelect(coffee)
    }
    return (
        <div>
            <h1>Coffee Items: </h1>
            <ul>
                {
                    props.coffee.map((coffee, index) => {
                        return (
                            <CoffeeItem coffeeId={coffee.id} coffeeModel={coffee} onCoffeeSelect={onCoffeeSelect}
                                        key={coffee.id}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}
