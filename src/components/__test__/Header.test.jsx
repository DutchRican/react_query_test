import { render } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';
import { Header } from "../Header";

describe('Header', () => {
    it('should show a header', () => {
        const { getByText } = render(<Header />);

        expect(getByText(/Testing bun/)).toBeInTheDocument();
    });
});