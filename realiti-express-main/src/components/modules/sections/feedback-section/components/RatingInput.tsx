import React from 'react';
import { Star } from 'lucide-react';

interface RatingInputProps {
    value: number;
    onChange: (value: number) => void;
    starSize?: number; // Optional prop for custom star size
}

export const RatingInput: React.FC<RatingInputProps> = ({ value, onChange, starSize = 24 }) => {
    const [hover, setHover] = React.useState<number | null>(null);

    return (
        <div className="flex space-x-2">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            className="hidden"
                            onClick={() => onChange(ratingValue)}
                        />
                        <Star
                            className="cursor-pointer"
                            size={starSize}
                            color={ratingValue <= (hover || value) ? '#ffc107' : '#e4e5e9'}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
};
