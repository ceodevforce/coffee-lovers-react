import React from "react";
import { CoffeeInterface } from "../../models/coffee/Coffee.interface";

// export type Coffee = {
//     name: string;
//     price: number;
//     imageUrl: string
// }

type Props = {
    coffeeId: number;
    coffeeModel: CoffeeInterface
    onCoffeeSelect: (coffee: CoffeeInterface) => void
}

export const CoffeeItem: React.FC<Props> = (props: Props) => {
    const { coffeeId, coffeeModel, onCoffeeSelect } = props

    const handleCoffeeEvent = (coffee: CoffeeInterface) => {
        console.log('Coffee Selected', coffee.id, coffee.favourite)
    }

    const onCoffeeSelectHandler = (coffee: CoffeeInterface) => {
        onCoffeeSelect(coffee)
    }
    return (
        <div>
                            <li onClick={() => onCoffeeSelectHandler(coffeeModel)}>
                                <h2>{coffeeModel.name}</h2>
                                <p>{coffeeModel.description}</p>
                                <p>{coffeeModel.price}</p>
                            </li>

        </div>
    )
}
