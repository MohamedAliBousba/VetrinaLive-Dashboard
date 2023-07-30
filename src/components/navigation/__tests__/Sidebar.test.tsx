import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar';

const mockedSetOpen = jest.fn();

describe("Sidebar", () => {
    it('should render same text passed into title prop', () => {
        render(
            <Sidebar 
              open={false}
              setOpen={mockedSetOpen}
            />
        );
        const logo = screen.queryByTestId("logo")

        expect(logo).not.toBeInTheDocument();
    });
})
