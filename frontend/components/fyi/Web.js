import React from 'react';
// import PropTypes from 'prop-types';

class Web extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        web();
    }
    render() {
        return (
            <canvas id="canvas3" />
        );
    }
}

const web = () => {
    setTimeout(() => {
        const canvas = document.querySelector('#canvas3');
        canvas.className += 'animated fadeIn';
        const ctx = canvas.getContext('2d');
        const colorDot = '#CECECE';
        const color = '#CECECE';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.display = 'block';
        ctx.fillStyle = colorDot;
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = color;

        const dots = {
            nb: 40,
            distance: 500,
            d_radius: 100,
            array: []
        };

        function Dot() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.vx = -0.5 + Math.random();
            this.vy = -0.5 + Math.random();

            this.radius = Math.random();
        }

        Dot.prototype = {
            create: function create() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            },

            animate: function animate() {
                for(let i = 0; i < dots.nb; i++) {
                    const dot = dots.array[i];
                    if(dot.y < 0 || dot.y > canvas.height) {
                        dot.vx = dot.vx;
                        dot.vy = - dot.vy;
                    } else if(dot.x < 0 || dot.x > canvas.width) {
                        dot.vx = - dot.vx;
                        dot.vy = dot.vy;
                    }
                    dot.x += dot.vx;
                    dot.y += dot.vy;
                }
            },

            line: function line() {
                for(let i = 0; i < dots.nb; i++) {
                    for(let j = 0; j < dots.nb; j++) {
                        const iDot = dots.array[i];
                        const jDot = dots.array[j];

                        if((iDot.x - jDot.x) < dots.distance && (iDot.y - jDot.y) < dots.distance && (iDot.x - jDot.x) > - dots.distance && (iDot.y - jDot.y) > - dots.distance) {
                            ctx.beginPath();
                            ctx.moveTo(iDot.x, iDot.y);
                            ctx.lineTo(jDot.x, jDot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        };
        function createDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let dot;
            for(let i = 0; i < dots.nb; i++) {
                dots.array.push(new Dot());
                dot = dots.array[i];
                dot.create();
            }
            dot.line();
            dot.animate();
        }
        setInterval(createDots, 50);
    }, 1000);
};

export default Web;
