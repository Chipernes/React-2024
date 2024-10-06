import useElementSize from '../hooks/useElementSize';

const ExampleComponent = () => {
    const [blockRef, blockSize] = useElementSize<HTMLDivElement>();
    const [buttonRef, buttonSize] = useElementSize<HTMLAnchorElement>();

    return (
        <div className="flex flex-col items-center p-4 space-y-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800">Відстеження розмірів HTML елементів</h1>

            <div
                ref={blockRef}
                className="w-1/2 h-64 bg-gradient-to-r from-green-400 via-teal-500 to-green-600 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold"
            >
                <p>
                  Ширина блока: {blockSize.width}px | Висота блока: {blockSize.height}px
                </p>
            </div>

            <a
                ref={buttonRef}
                href="https://vuejs.org/"
                target="_blank"
                className="text-gray-900 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Посилання на найкращий JavaScript фреймворк
            </a>

            <div className="text-center">
                <p>Ширина кнопки вище: {buttonSize.width}px</p>
                <p>Висота кнопки вище: {buttonSize.height}px</p>
            </div>
        </div>
    );
};

export default ExampleComponent;
