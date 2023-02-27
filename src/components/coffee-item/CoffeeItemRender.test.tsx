import { render, screen, prettyDOM} from "@testing-library/react";

import { CoffeeInterface } from "../../models/coffee/Coffee.interface";
import { CoffeeListComponent } from "../CoffeeList.component";
import { CoffeeItem } from "./CoffeeItem.component";
import {describe, expect, test, it} from "vitest";

describe("Coffee Component: Render Test", () => {

    test('render a coffee', () => {
        const coffeeId = 6
        const coffeeModel: CoffeeInterface = {
            id: coffeeId,
            name: "Mocha aAmm",
            description: "This is a test description",
            price: 4.35,
            favourite: true,
            imageUrl: '',
        }

        // render component
        render(<CoffeeItem coffeeId={coffeeId} coffeeModel={coffeeModel} onCoffeeSelect={() => {}}/>)
        const liExample = screen.getByTestId(coffeeId)
        expect(liExample).not.toBeNull()
    })
})
