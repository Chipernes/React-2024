import { FC } from "react";
import { Controller } from "react-hook-form";

type RadioMatrixProps = {
    matrixData?: {
        columns: string[],
        rows: string[],
    },
    name: string,
    control: any,
};

const RadioMatrix: FC<RadioMatrixProps> = ({ control, matrixData, name }) => {
    const { columns, rows } = matrixData!;

    return (
        <table>
            <thead>
            <tr>
                <th className="p-2"></th>
                {columns.map((column) => (
                    <th key={column} className="p-2">{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {rows.map((row) => (
                <tr key={row} className="bg-amber-950">
                    <td className="bg-gray-50 p-2">{row}</td>
                    {columns.map((column) => (
                        <td key={`${row}-${column}`} className="bg-gray-50 p-2 text-center">
                            <Controller
                                name={`${name}.${row}`}
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="radio"
                                        value={column}
                                        checked={field.value === column}
                                        onChange={() => field.onChange(column)}
                                    />
                                )}
                            />
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default RadioMatrix;
