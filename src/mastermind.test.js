const colors = require('./colors');
const hints = require('./hints');
const { pickColor } = require('./mastermind')
const { generateCode } = require('./mastermind')
const { checkCode } = require('./mastermind')

describe('pickColor', () => {
    it('should take a randomfn and return a color based on that', () => {
        expect(pickColor(() => 0.1)).toEqual(colors.RED);
    });

    [
        { valueRange: 0.125, color: colors.RED },
        { valueRange: 0.25, color: colors.GREEN },
        { valueRange: 0.375, color: colors.YELLOW },
        { valueRange: 0.5, color: colors.BLUE },
        { valueRange: 0.625, color: colors.PURPLE },
        { valueRange: 0.75, color: colors.ORANGE },
        { valueRange: 0.875, color: colors.PINK },
        { valueRange: 1, color: colors.BROWN }
    ].forEach(({ valueRange, color }) => {
        it(`should return ${color} for value in Range of ${valueRange}`, () => {
            expect(pickColor(() => { return valueRange - 0.001 })).toEqual(color)
        })
    })

    it('it should throw on function that return more than 1.0', () => {
        expect(() => {
            pickColor(() => 1.0)
        }).toThrow()
    })
})

describe('generateCode', () => {
    it('should return 4 colors based on the randomfunction', () => {
        let count = 0;
        const fakeRandom = () => {
            count += 1;
            return (0.125 - 0.001) * count;
        };
        expect(generateCode(fakeRandom)).toEqual([colors.RED, colors.GREEN, colors.YELLOW, colors.BLUE])
    });
});

describe('checkCode', () => {
    it('should turn code and guess into hints when all colors diverge', () => {
        expect(checkCode(
            [colors.RED, colors.GREEN, colors.YELLOW, colors.BLUE],
            [colors.PURPLE, colors.ORANGE, colors.PINK, colors.BROWN],
            () => {  }
        )).toEqual([hints.NOT_AT_ALL, hints.NOT_AT_ALL, hints.NOT_AT_ALL, hints.NOT_AT_ALL])
    })

    it('should turn code and guess into hints when all colors are equal', () => {
        expect(checkCode(
            [colors.RED, colors.GREEN, colors.YELLOW, colors.BLUE],
            [colors.RED, colors.GREEN, colors.YELLOW, colors.BLUE],
            () => {  }
        )).toEqual([hints.FITS, hints.FITS, hints.FITS, hints.FITS])
    })

    it('should turn code and guess into hints when all colors are partially right', () => {
        expect(checkCode(
            [colors.RED, colors.GREEN, colors.YELLOW, colors.BLUE],
            [colors.GREEN, colors.RED, colors.BLUE, colors.YELLOW],
            () => {  }
        )).toEqual([hints.PARTIALLY, hints.PARTIALLY, hints.PARTIALLY, hints.PARTIALLY])
    })

    it('should turn code and guess into hints when some colors are partially right others are right', () => {
        expect(checkCode(
            [colors.BROWN, colors.GREEN, colors.YELLOW, colors.BLUE],
            [colors.BROWN, colors.YELLOW, colors.BLUE, colors.GREEN],
            () => {  }
        )).toEqual([hints.FITS, hints.PARTIALLY, hints.PARTIALLY, hints.PARTIALLY])
    })

    it('should turn code and guess into hints when some colors are right others are wrong', () => {
        expect(checkCode(
            [colors.PURPLE, colors.GREEN, colors.YELLOW, colors.BLUE],
            [colors.PURPLE, colors.ORANGE, colors.PINK, colors.BROWN],
            () => {  }
        )).toEqual([hints.FITS, hints.NOT_AT_ALL, hints.NOT_AT_ALL, hints.NOT_AT_ALL])
    })

    it('should turn code and guess into hints when some colors, partially right , diverged and right', () => {
        expect(checkCode(
            [colors.RED, colors.GREEN, colors.YELLOW, colors.BLUE],
            [colors.RED, colors.YELLOW, colors.ORANGE, colors.GREEN],
            () => {  }
        )).toEqual([hints.FITS, hints.PARTIALLY, hints.NOT_AT_ALL, hints.PARTIALLY])
    })
    it('should countain solutions of result in different positions in random value(1)', () => {
        expect(checkCode(
            [colors.RED, colors.GREEN, colors.YELLOW, colors.BLUE],
            [colors.RED, colors.YELLOW, colors.ORANGE, colors.GREEN],
            (_) => { return 1 }
        )).toContain(hints.PARTIALLY, hints.NOT_AT_ALL, hints.PARTIALLY, hints.FITS)
    })

    it('should countain solutions of result in different positions in random value(2)', () => {
        expect(checkCode(
            [colors.RED, colors.GREEN, colors.YELLOW, colors.BLUE],
            [colors.RED, colors.YELLOW, colors.ORANGE, colors.GREEN],
            (_) => { return 2 }
        )).toContain(hints.PARTIALLY, hints.NOT_AT_ALL, hints.PARTIALLY, hints.FITS)
    })

    it('should countain solutions of result in different positions in random value(3)', () => {
        expect(checkCode(
            [colors.RED, colors.GREEN, colors.YELLOW, colors.BLUE],
            [colors.RED, colors.YELLOW, colors.ORANGE, colors.GREEN],
            (_) => { return 3 }
        )).toContain(hints.PARTIALLY, hints.NOT_AT_ALL, hints.PARTIALLY, hints.FITS)
    })
});
