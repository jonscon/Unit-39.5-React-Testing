import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

// smoke test
it("renders Card without crashing", function() {
    let currCard = TEST_IMAGES[0];
    render(<Card caption={currCard.caption} src={currCard.src} currNum="1" totalNum={TEST_IMAGES.length}/>);
});

// snapshot test
it("matches snapshot", function() {
    let currCard = TEST_IMAGES[0];
    const { asFragment } = render(<Card caption={currCard.caption} src={currCard.src} currNum="1" totalNum={TEST_IMAGES.length}/>);
    expect(asFragment()).toMatchSnapshot();
})

