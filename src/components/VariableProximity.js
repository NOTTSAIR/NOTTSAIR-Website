import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import './VariableProximity.css';

const VariableProximity = ({
    label,
    fromFontVariationSettings = "'wght' 400, 'opsz' 9",
    toFontVariationSettings = "'wght' 900, 'opsz' 40",
    radius = 5,
    falloff = 'linear',
    className = '',
    onClick,
}) => {
    const containerRef = useRef(null);
    const letterRefs = useRef([]);
    const [interpolatedSettings, setInterpolatedSettings] = useState([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const parseSettings = (settingsStr) => {
            return new Map(
                settingsStr.split(',').map((s) => {
                    const [name, value] = s.trim().split(' ');
                    return [name.replace(/['"]/g, ''), parseFloat(value)];
                })
            );
        };

        const fromSettings = parseSettings(fromFontVariationSettings);
        const toSettings = parseSettings(toFontVariationSettings);

        const handleMouseMove = (e) => {
            if (!container) return;
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const newSettings = letterRefs.current.map((letterRef) => {
                if (!letterRef) return fromFontVariationSettings;

                const letterRect = letterRef.getBoundingClientRect();
                const letterCenterX = letterRect.left + letterRect.width / 2;
                const letterCenterY = letterRect.top + letterRect.height / 2;

                const distance = Math.sqrt(
                    Math.pow(mouseX - letterCenterX, 2) +
                        Math.pow(mouseY - letterCenterY, 2)
                );

                if (distance >= radius) return fromFontVariationSettings;

                let progress = 1 - distance / radius;

                if (falloff === 'exponential') progress = Math.pow(progress, 2);
                if (falloff === 'gaussian')
                    progress = Math.exp(
                        -Math.pow(distance / (radius * 0.5), 2)
                    );

                const currentSettings = [];
                fromSettings.forEach((fromValue, key) => {
                    const toValue = toSettings.get(key) || fromValue;
                    const interpolatedValue =
                        fromValue + (toValue - fromValue) * progress;
                    currentSettings.push(`'${key}' ${interpolatedValue}`);
                });

                return currentSettings.join(', ');
            });

            setInterpolatedSettings(newSettings);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [fromFontVariationSettings, toFontVariationSettings, radius, falloff]);

    return (
        <span
            ref={containerRef}
            className={`${className} variable-proximity-container`}
            onClick={onClick}
            style={{ display: 'inline-block', cursor: 'pointer' }}
        >
            {label.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    ref={(el) => (letterRefs.current[index] = el)}
                    style={{
                        display: 'inline-block',
                        fontVariationSettings:
                            interpolatedSettings[index] ||
                            fromFontVariationSettings,
                        transition: 'font-variation-settings 0.1s ease',
                        minWidth: letter === ' ' ? '0.3em' : 'auto',
                    }}
                    aria-hidden="true"
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
            <span
                className="sr-only"
                style={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: 0,
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    borderWidth: 0,
                }}
            >
                {label}
            </span>
        </span>
    );
};

export default VariableProximity;
