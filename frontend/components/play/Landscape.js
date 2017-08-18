import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

class Landscape extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        createLandscape();
    }
    componentWillUnmount() {
        window.cancelAnimationFrame(window.animID);
    }
    render() {
        return (
            <canvas id="canvas3" />
        );
    }
}

export default Landscape;

function createLandscape() {
    setTimeout(() => {
        var SimplexNoise = function(r) {
            if (r == undefined) r = Math;
            this.grad3 = [
                [1, 1, 0],
                [-1, 1, 0],
                [1, -1, 0],
                [-1, -1, 0],
                [1, 0, 1],
                [-1, 0, 1],
                [1, 0, -1],
                [-1, 0, -1],
                [0, 1, 1],
                [0, -1, 1],
                [0, 1, -1],
                [0, -1, -1]
            ];

            this.grad4 = [
                [0, 1, 1, 1],
                [0, 1, 1, -1],
                [0, 1, -1, 1],
                [0, 1, -1, -1],
                [0, -1, 1, 1],
                [0, -1, 1, -1],
                [0, -1, -1, 1],
                [0, -1, -1, -1],
                [1, 0, 1, 1],
                [1, 0, 1, -1],
                [1, 0, -1, 1],
                [1, 0, -1, -1],
                [-1, 0, 1, 1],
                [-1, 0, 1, -1],
                [-1, 0, -1, 1],
                [-1, 0, -1, -1],
                [1, 1, 0, 1],
                [1, 1, 0, -1],
                [1, -1, 0, 1],
                [1, -1, 0, -1],
                [-1, 1, 0, 1],
                [-1, 1, 0, -1],
                [-1, -1, 0, 1],
                [-1, -1, 0, -1],
                [1, 1, 1, 0],
                [1, 1, -1, 0],
                [1, -1, 1, 0],
                [1, -1, -1, 0],
                [-1, 1, 1, 0],
                [-1, 1, -1, 0],
                [-1, -1, 1, 0],
                [-1, -1, -1, 0]
            ];

            this.p = [];
            for (var i = 0; i < 256; i++) {
                this.p[i] = Math.floor(r.random() * 256);
            }
            // To remove the need for index wrapping, double the permutation table length
            this.perm = [];
            for (var i = 0; i < 512; i++) {
                this.perm[i] = this.p[i & 255];
            }

            // A lookup table to traverse the simplex around a given point in 4D.
            // Details can be found where this table is used, in the 4D noise method.
            this.simplex = [
                [0, 1, 2, 3],
                [0, 1, 3, 2],
                [0, 0, 0, 0],
                [0, 2, 3, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 2, 3, 0],
                [0, 2, 1, 3],
                [0, 0, 0, 0],
                [0, 3, 1, 2],
                [0, 3, 2, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 3, 2, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 2, 0, 3],
                [0, 0, 0, 0],
                [1, 3, 0, 2],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [2, 3, 0, 1],
                [2, 3, 1, 0],
                [1, 0, 2, 3],
                [1, 0, 3, 2],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [2, 0, 3, 1],
                [0, 0, 0, 0],
                [2, 1, 3, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [2, 0, 1, 3],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [3, 0, 1, 2],
                [3, 0, 2, 1],
                [0, 0, 0, 0],
                [3, 1, 2, 0],
                [2, 1, 0, 3],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [3, 1, 0, 2],
                [0, 0, 0, 0],
                [3, 2, 0, 1],
                [3, 2, 1, 0]
            ];
        };

        SimplexNoise.prototype.dot = function(g, x, y) {
            return g[0] * x + g[1] * y;
        };

        SimplexNoise.prototype.dot3 = function(g, x, y, z) {
            return g[0] * x + g[1] * y + g[2] * z;
        }

        SimplexNoise.prototype.dot4 = function(g, x, y, z, w) {
            return g[0] * x + g[1] * y + g[2] * z + g[3] * w;
        };

        SimplexNoise.prototype.noise = function(xin, yin) {
            var n0, n1, n2; // Noise contributions from the three corners
            // Skew the input space to determine which simplex cell we're in
            var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
            var s = (xin + yin) * F2; // Hairy factor for 2D
            var i = Math.floor(xin + s);
            var j = Math.floor(yin + s);
            var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
            var t = (i + j) * G2;
            var X0 = i - t; // Unskew the cell origin back to (x,y) space
            var Y0 = j - t;
            var x0 = xin - X0; // The x,y distances from the cell origin
            var y0 = yin - Y0;
            // For the 2D case, the simplex shape is an equilateral triangle.
            // Determine which simplex we are in.
            var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
            if (x0 > y0) {
                i1 = 1;
                j1 = 0;
            } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
            else {
                i1 = 0;
                j1 = 1;
            } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
            // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
            // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
            // c = (3-sqrt(3))/6
            var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
            var y1 = y0 - j1 + G2;
            var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
            var y2 = y0 - 1.0 + 2.0 * G2;
            // Work out the hashed gradient indices of the three simplex corners
            var ii = i & 255;
            var jj = j & 255;
            var gi0 = this.perm[ii + this.perm[jj]] % 12;
            var gi1 = this.perm[ii + i1 + this.perm[jj + j1]] % 12;
            var gi2 = this.perm[ii + 1 + this.perm[jj + 1]] % 12;
            // Calculate the contribution from the three corners
            var t0 = 0.5 - x0 * x0 - y0 * y0;
            if (t0 < 0) n0 = 0.0;
            else {
                t0 *= t0;
                n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0); // (x,y) of grad3 used for 2D gradient
            }
            var t1 = 0.5 - x1 * x1 - y1 * y1;
            if (t1 < 0) n1 = 0.0;
            else {
                t1 *= t1;
                n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1);
            }
            var t2 = 0.5 - x2 * x2 - y2 * y2;
            if (t2 < 0) n2 = 0.0;
            else {
                t2 *= t2;
                n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2);
            }
            // Add contributions from each corner to get the final noise value.
            // The result is scaled to return values in the interval [-1,1].
            return 70.0 * (n0 + n1 + n2);
        };

        // 3D simplex noise
        SimplexNoise.prototype.noise3d = function(xin, yin, zin) {
            var n0, n1, n2, n3; // Noise contributions from the four corners
            // Skew the input space to determine which simplex cell we're in
            var F3 = 1.0 / 3.0;
            var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D
            var i = Math.floor(xin + s);
            var j = Math.floor(yin + s);
            var k = Math.floor(zin + s);
            var G3 = 1.0 / 6.0; // Very nice and simple unskew factor, too
            var t = (i + j + k) * G3;
            var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
            var Y0 = j - t;
            var Z0 = k - t;
            var x0 = xin - X0; // The x,y,z distances from the cell origin
            var y0 = yin - Y0;
            var z0 = zin - Z0;
            // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
            // Determine which simplex we are in.
            var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
            var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
            if (x0 >= y0) {
                if (y0 >= z0) {
                    i1 = 1;
                    j1 = 0;
                    k1 = 0;
                    i2 = 1;
                    j2 = 1;
                    k2 = 0;
                } // X Y Z order
                else if (x0 >= z0) {
                    i1 = 1;
                    j1 = 0;
                    k1 = 0;
                    i2 = 1;
                    j2 = 0;
                    k2 = 1;
                } // X Z Y order
                else {
                    i1 = 0;
                    j1 = 0;
                    k1 = 1;
                    i2 = 1;
                    j2 = 0;
                    k2 = 1;
                } // Z X Y order
            } else { // x0<y0
                if (y0 < z0) {
                    i1 = 0;
                    j1 = 0;
                    k1 = 1;
                    i2 = 0;
                    j2 = 1;
                    k2 = 1;
                } // Z Y X order
                else if (x0 < z0) {
                    i1 = 0;
                    j1 = 1;
                    k1 = 0;
                    i2 = 0;
                    j2 = 1;
                    k2 = 1;
                } // Y Z X order
                else {
                    i1 = 0;
                    j1 = 1;
                    k1 = 0;
                    i2 = 1;
                    j2 = 1;
                    k2 = 0;
                } // Y X Z order
            }
            // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
            // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
            // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
            // c = 1/6.
            var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
            var y1 = y0 - j1 + G3;
            var z1 = z0 - k1 + G3;
            var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
            var y2 = y0 - j2 + 2.0 * G3;
            var z2 = z0 - k2 + 2.0 * G3;
            var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
            var y3 = y0 - 1.0 + 3.0 * G3;
            var z3 = z0 - 1.0 + 3.0 * G3;
            // Work out the hashed gradient indices of the four simplex corners
            var ii = i & 255;
            var jj = j & 255;
            var kk = k & 255;
            var gi0 = this.perm[ii + this.perm[jj + this.perm[kk]]] % 12;
            var gi1 = this.perm[ii + i1 + this.perm[jj + j1 + this.perm[kk + k1]]] % 12;
            var gi2 = this.perm[ii + i2 + this.perm[jj + j2 + this.perm[kk + k2]]] % 12;
            var gi3 = this.perm[ii + 1 + this.perm[jj + 1 + this.perm[kk + 1]]] % 12;
            // Calculate the contribution from the four corners
            var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
            if (t0 < 0) n0 = 0.0;
            else {
                t0 *= t0;
                n0 = t0 * t0 * this.dot3(this.grad3[gi0], x0, y0, z0);
            }
            var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
            if (t1 < 0) n1 = 0.0;
            else {
                t1 *= t1;
                n1 = t1 * t1 * this.dot3(this.grad3[gi1], x1, y1, z1);
            }
            var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
            if (t2 < 0) n2 = 0.0;
            else {
                t2 *= t2;
                n2 = t2 * t2 * this.dot3(this.grad3[gi2], x2, y2, z2);
            }
            var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
            if (t3 < 0) n3 = 0.0;
            else {
                t3 *= t3;
                n3 = t3 * t3 * this.dot3(this.grad3[gi3], x3, y3, z3);
            }
            // Add contributions from each corner to get the final noise value.
            // The result is scaled to stay just inside [-1,1]
            return 32.0 * (n0 + n1 + n2 + n3);
        };

        // 4D simplex noise
        SimplexNoise.prototype.noise4d = function(x, y, z, w) {
            // For faster and easier lookups
            var grad4 = this.grad4;
            var simplex = this.simplex;
            var perm = this.perm;

            // The skewing and unskewing factors are hairy again for the 4D case
            var F4 = (Math.sqrt(5.0) - 1.0) / 4.0;
            var G4 = (5.0 - Math.sqrt(5.0)) / 20.0;
            var n0, n1, n2, n3, n4; // Noise contributions from the five corners
            // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
            var s = (x + y + z + w) * F4; // Factor for 4D skewing
            var i = Math.floor(x + s);
            var j = Math.floor(y + s);
            var k = Math.floor(z + s);
            var l = Math.floor(w + s);
            var t = (i + j + k + l) * G4; // Factor for 4D unskewing
            var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
            var Y0 = j - t;
            var Z0 = k - t;
            var W0 = l - t;
            var x0 = x - X0; // The x,y,z,w distances from the cell origin
            var y0 = y - Y0;
            var z0 = z - Z0;
            var w0 = w - W0;

            // For the 4D case, the simplex is a 4D shape I won't even try to describe.
            // To find out which of the 24 possible simplices we're in, we need to
            // determine the magnitude ordering of x0, y0, z0 and w0.
            // The method below is a good way of finding the ordering of x,y,z,w and
            // then find the correct traversal order for the simplex we’re in.
            // First, six pair-wise comparisons are performed between each possible pair
            // of the four coordinates, and the results are used to add up binary bits
            // for an integer index.
            var c1 = (x0 > y0) ? 32 : 0;
            var c2 = (x0 > z0) ? 16 : 0;
            var c3 = (y0 > z0) ? 8 : 0;
            var c4 = (x0 > w0) ? 4 : 0;
            var c5 = (y0 > w0) ? 2 : 0;
            var c6 = (z0 > w0) ? 1 : 0;
            var c = c1 + c2 + c3 + c4 + c5 + c6;
            var i1, j1, k1, l1; // The integer offsets for the second simplex corner
            var i2, j2, k2, l2; // The integer offsets for the third simplex corner
            var i3, j3, k3, l3; // The integer offsets for the fourth simplex corner
            // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
            // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
            // impossible. Only the 24 indices which have non-zero entries make any sense.
            // We use a thresholding to set the coordinates in turn from the largest magnitude.
            // The number 3 in the "simplex" array is at the position of the largest coordinate.
            i1 = simplex[c][0] >= 3 ? 1 : 0;
            j1 = simplex[c][1] >= 3 ? 1 : 0;
            k1 = simplex[c][2] >= 3 ? 1 : 0;
            l1 = simplex[c][3] >= 3 ? 1 : 0;
            // The number 2 in the "simplex" array is at the second largest coordinate.
            i2 = simplex[c][0] >= 2 ? 1 : 0;
            j2 = simplex[c][1] >= 2 ? 1 : 0;
            k2 = simplex[c][2] >= 2 ? 1 : 0;
            l2 = simplex[c][3] >= 2 ? 1 : 0;
            // The number 1 in the "simplex" array is at the second smallest coordinate.
            i3 = simplex[c][0] >= 1 ? 1 : 0;
            j3 = simplex[c][1] >= 1 ? 1 : 0;
            k3 = simplex[c][2] >= 1 ? 1 : 0;
            l3 = simplex[c][3] >= 1 ? 1 : 0;
            // The fifth corner has all coordinate offsets = 1, so no need to look that up.
            var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
            var y1 = y0 - j1 + G4;
            var z1 = z0 - k1 + G4;
            var w1 = w0 - l1 + G4;
            var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
            var y2 = y0 - j2 + 2.0 * G4;
            var z2 = z0 - k2 + 2.0 * G4;
            var w2 = w0 - l2 + 2.0 * G4;
            var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
            var y3 = y0 - j3 + 3.0 * G4;
            var z3 = z0 - k3 + 3.0 * G4;
            var w3 = w0 - l3 + 3.0 * G4;
            var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
            var y4 = y0 - 1.0 + 4.0 * G4;
            var z4 = z0 - 1.0 + 4.0 * G4;
            var w4 = w0 - 1.0 + 4.0 * G4;
            // Work out the hashed gradient indices of the five simplex corners
            var ii = i & 255;
            var jj = j & 255;
            var kk = k & 255;
            var ll = l & 255;
            var gi0 = perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32;
            var gi1 = perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32;
            var gi2 = perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32;
            var gi3 = perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32;
            var gi4 = perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32;
            // Calculate the contribution from the five corners
            var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
            if (t0 < 0) n0 = 0.0;
            else {
                t0 *= t0;
                n0 = t0 * t0 * this.dot4(grad4[gi0], x0, y0, z0, w0);
            }
            var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
            if (t1 < 0) n1 = 0.0;
            else {
                t1 *= t1;
                n1 = t1 * t1 * this.dot4(grad4[gi1], x1, y1, z1, w1);
            }
            var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
            if (t2 < 0) n2 = 0.0;
            else {
                t2 *= t2;
                n2 = t2 * t2 * this.dot4(grad4[gi2], x2, y2, z2, w2);
            }
            var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
            if (t3 < 0) n3 = 0.0;
            else {
                t3 *= t3;
                n3 = t3 * t3 * this.dot4(grad4[gi3], x3, y3, z3, w3);
            }
            var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
            if (t4 < 0) n4 = 0.0;
            else {
                t4 *= t4;
                n4 = t4 * t4 * this.dot4(grad4[gi4], x4, y4, z4, w4);
            }
            // Sum up and scale the result to cover the range [-1,1]
            return 27.0 * (n0 + n1 + n2 + n3 + n4);
        };

        var THREEx = THREEx || {}

        THREEx.Terrain = {}

        /**
         * allocate the heightmap
         *
         * @param  {Number} width the width of the heightmap
         * @param  {Number} depth the depth of the heightmap
         * @return {Array} the allocated heightmap
         */
        THREEx.Terrain.allocateHeightMap = function(width, depth) {
            var ArrayClass = THREEx.Terrain.allocateHeightMap.ArrayClass
            var heightMap = new Array(width)
            for (var x = 0; x < width; x++) {
                heightMap[x] = new ArrayClass(depth)
            }
            return heightMap
        }
        THREEx.Terrain.allocateHeightMap.ArrayClass = window.Float64Array || window.Array

        /**
         * generate a heightmap using a simplex noise
         * @todo make it it tunable... how ?
         *
         * @param  {Array} heightMap the heightmap to store the data
         */
        THREEx.Terrain.simplexHeightMap = function(heightMap) {
            // get heightMap dimensions
            var width = heightMap.length
            var depth = heightMap[0].length

            var simplex = new SimplexNoise()
            for (var x = 0; x < width; x++) {
                for (var z = 0; z < depth; z++) {
                    // compute the height
                    var height = 0
                    var level = 8
                    height += (simplex.noise(x / level, z / level) / 2 + 0.5) * 0.125
                    level *= 3
                    height += (simplex.noise(x / level, z / level) / 2 + 0.5) * 0.25
                    level *= 2
                    height += (simplex.noise(x / level, z / level) / 2 + 0.5) * 0.5
                    level *= 2
                    height += (simplex.noise(x / level, z / level) / 2 + 0.5) * 1
                    height /= 1 + 0.5 + 0.25 + 0.125
                    // put the height in the heightMap
                    heightMap[x][z] = height
                }
            }
        }

        /**
         * build a canvas 2d from a heightmap
         * @param  {Array} heightMap heightmap
         * @param  {HTMLCanvasElement|undefined} canvas  the destination canvas.
         * @return {HTMLCanvasElement}           the canvas
         */
        THREEx.Terrain.heightMapToCanvas = function(heightMap, canvas) {
            // get heightMap dimensions
            var width = heightMap.length
            var depth = heightMap[0].length
            // create canvas
            canvas = canvas || document.createElement('canvas')
            canvas.width = width
            canvas.height = depth
            var context = canvas.getContext("2d");
            // loop on each pixel of the canvas
            for (var x = 0; x < canvas.width; x++) {
                for (var y = 0; y < canvas.height; y++) {
                    var height = heightMap[x][y]
                    var color = THREEx.Terrain.heightToColor(height)
                    context.fillStyle = color.getStyle()
                    context.fillRect(x, y, 1, 1)
                }
            }
            // return the just built canvas
            return canvas
        }

        /**
         * Build a THREE.PlaneGeometry based on a heightMap
         *
         * @param  {Array} heightMap the heightmap
         * @return {THREE.Geometry}  the just built geometry
         */
        THREEx.Terrain.heightMapToPlaneGeometry = function(heightMap) {
            // get heightMap dimensions
            var width = heightMap.length
            var depth = heightMap[0].length
            // build geometry
            var geometry = new THREEx.Terrain.PlaneGeometry(1, 1, width - 1, depth - 1)
            // loop on each vertex of the geometry
            for (var x = 0; x < width; x++) {
                for (var z = 0; z < depth; z++) {
                    // get the height from heightMap
                    var height = heightMap[x][z]
                    // set the vertex.z to a normalized height
                    var vertex = geometry.vertices[x + z * width]
                    vertex.z = (height - 0.5) * 2
                }
            }
            // notify the geometry need to update vertices
            geometry.verticesNeedUpdate = true
            // notify the geometry need to update normals
            geometry.computeFaceNormals()
            geometry.computeVertexNormals()
            geometry.normalsNeedUpdate = true
            // return the just built geometry
            return geometry
        }

        THREEx.Terrain.heightMapToHeight = function(heightMap, x, z) {
            // get heightMap dimensions
            var width = heightMap.length
            var depth = heightMap[0].length
            // sanity check - boundaries
            console.assert(x >= 0 && x < width)
            console.assert(z >= 0 && z < depth)

            // get the delta within a single segment
            var deltaX = x - Math.floor(x)
            var deltaZ = z - Math.floor(z)

            // get the height of each corner of the segment
            var heightNW = heightMap[Math.floor(x)][Math.floor(z)]
            var heightNE = heightMap[Math.ceil(x)][Math.floor(z)]
            var heightSW = heightMap[Math.floor(x)][Math.ceil(z)]
            var heightSE = heightMap[Math.ceil(x)][Math.ceil(z)]

            // test in which triangle the point is. north-east or south-west
            var inTriangleNE = deltaX > deltaZ ? true : false
            if (inTriangleNE) {
                var height = heightNE +
                    (heightNW - heightNE) * (1 - deltaX) +
                    (heightSE - heightNE) * deltaZ
            } else {
                var height = heightSW +
                    (heightSE - heightSW) * deltaX +
                    (heightNW - heightSW) * (1 - deltaZ)
            }
            // return the height
            return height
        }

        THREEx.Terrain.planeToHeightMapCoords = function(heightMap, planeMesh, x, z) {

            // TODO assert no rotation in planeMesh
            // - how can i check that ? with euler ?

            var position = new THREE.Vector3(x, 0, z)

            // set position relative to planeMesh position
            position.sub(planeMesh.position)

            // heightMap origin is at its top-left, while planeMesh origin is at its center
            position.x += planeMesh.geometry.width / 2 * planeMesh.scale.x
            position.z += planeMesh.geometry.height / 2 * planeMesh.scale.y

            // normalize it from [0,1] for the heightmap
            position.x /= planeMesh.geometry.width * planeMesh.scale.x
            position.z /= planeMesh.geometry.height * planeMesh.scale.y

            // get heightMap dimensions
            var width = heightMap.length
            var depth = heightMap[0].length

            // convert it in heightMap coordinate
            position.x *= (width - 1)
            position.z *= (depth - 1)

            position.y = THREEx.Terrain.heightMapToHeight(heightMap, position.x, position.z)
            position.y = (position.y - 0.5) * 2
            position.y *= planeMesh.scale.z

            return position.y
        }

        THREEx.Terrain.planeToHeightMapCoords0 = function(position, heightMap, planeMesh) {

            // TODO assert no rotation in planeMesh
            // - how can i check that ? with euler ?

            // set position relative to planeMesh position
            position.sub(planeMesh.position)

            // heightMap origin is at its top-left, while planeMesh origin is at its center
            position.x += planeMesh.geometry.width / 2
            position.z += planeMesh.geometry.height / 2

            // normalize it from [0,1] for the heightmap
            position.x /= planeMesh.geometry.width
            position.z /= planeMesh.geometry.height

            // get heightMap dimensions
            var width = heightMap.length
            var depth = heightMap[0].length

            // convert it in heightMap coordinate
            position.x *= (width - 1)
            position.z *= (depth - 1)

            var height = THREEx.Terrain.heightMapToHeight(heightMap, position.x, position.z)
            position.y = (height - 0.5) * 2

            return position;
        }

        /**
         * Set the vertex color for a THREE.Geometry based on a heightMap
         *
         * @param  {Array} heightMap the heightmap
         * @param  {THREE.Geometry} geometry  the geometry to set
         */
        THREEx.Terrain.heightMapToVertexColor = function(heightMap, geometry) {
            // get heightMap dimensions
            var width = heightMap.length
            var depth = heightMap[0].length
            // loop on each vertex of the geometry
            var color = new THREE.Color()
            for (var i = 0; i < geometry.faces.length; i++) {
                var face = geometry.faces[i]
                if (face instanceof THREE.Face4) {
                    console.assert(face instanceof THREE.Face4)
                    face.vertexColors.push(vertexIdxToColor(face.a).clone())
                    face.vertexColors.push(vertexIdxToColor(face.b).clone())
                    face.vertexColors.push(vertexIdxToColor(face.c).clone())
                    face.vertexColors.push(vertexIdxToColor(face.d).clone())
                } else if (face instanceof THREE.Face3) {
                    console.assert(face instanceof THREE.Face3)
                    face.vertexColors.push(vertexIdxToColor(face.a).clone())
                    face.vertexColors.push(vertexIdxToColor(face.b).clone())
                    face.vertexColors.push(vertexIdxToColor(face.c).clone())
                } else console.assert(false)
            }
            geometry.colorsNeedUpdate = true
            return

            function vertexIdxToColor(vertexIdx) {
                var x = Math.floor(vertexIdx % width)
                var z = Math.floor(vertexIdx / width)
                var height = heightMap[x][z]
                return THREEx.Terrain.heightToColor(height)
            }
        }

        /**
         * give a color based on a given height
         *
         * @param {Number} height the height
         * @return {THREE.Color} the color for this height
         */
        THREEx.Terrain.heightToColor = (function() {
            var color = new THREE.Color()
            return function(height) {
                // compute color based on height
                if (height < 0.5) {
                    height = (height * 2) * 0.5 + 0.2
                    color.setRGB(0, 0, height)
                } else if (height < 0.7) {
                    height = (height - 0.5) / 0.2
                    height = height * 0.5 + 0.2
                    color.setRGB(0, height, 0)
                } else {
                    height = (height - 0.7) / 0.3
                    height = height * 0.5 + 0.5
                    color.setRGB(height, height, height)
                }
                // color.setRGB(1,1,1)
                return color;
            }
        })()


        //////////////////////////////////////////////////////////////////////////////////
        //		comment								//
        //////////////////////////////////////////////////////////////////////////////////

        /**
         * plane geometry with THREE.Face3 from three.js r66
         *
         * @param {[type]} width          [description]
         * @param {[type]} height         [description]
         * @param {[type]} widthSegments  [description]
         * @param {[type]} heightSegments [description]
         */
        THREEx.Terrain.PlaneGeometry = function(width, height, widthSegments, heightSegments) {

            THREE.Geometry.call(this);

            this.width = width;
            this.height = height;

            this.widthSegments = widthSegments || 1;
            this.heightSegments = heightSegments || 1;

            var ix, iz;
            var width_half = width / 2;
            var height_half = height / 2;

            var gridX = this.widthSegments;
            var gridZ = this.heightSegments;

            var gridX1 = gridX + 1;
            var gridZ1 = gridZ + 1;

            var segment_width = this.width / gridX;
            var segment_height = this.height / gridZ;

            var normal = new THREE.Vector3(0, 0, 1);

            for (iz = 0; iz < gridZ1; iz++) {

                for (ix = 0; ix < gridX1; ix++) {

                    var x = ix * segment_width - width_half;
                    var y = iz * segment_height - height_half;

                    this.vertices.push(new THREE.Vector3(x, -y, 0));

                }

            }

            for (iz = 0; iz < gridZ; iz++) {

                for (ix = 0; ix < gridX; ix++) {

                    var a = ix + gridX1 * iz;
                    var b = ix + gridX1 * (iz + 1);
                    var c = (ix + 1) + gridX1 * (iz + 1);
                    var d = (ix + 1) + gridX1 * iz;

                    var uva = new THREE.Vector2(ix / gridX, 1 - iz / gridZ);
                    var uvb = new THREE.Vector2(ix / gridX, 1 - (iz + 1) / gridZ);
                    var uvc = new THREE.Vector2((ix + 1) / gridX, 1 - (iz + 1) / gridZ);
                    var uvd = new THREE.Vector2((ix + 1) / gridX, 1 - iz / gridZ);

                    var face = new THREE.Face3(a, b, d);
                    face.normal.copy(normal);
                    face.vertexNormals.push(normal.clone(), normal.clone(), normal.clone());

                    this.faces.push(face);
                    this.faceVertexUvs[0].push([uva, uvb, uvd]);

                    face = new THREE.Face3(b, c, d);
                    face.normal.copy(normal);
                    face.vertexNormals.push(normal.clone(), normal.clone(), normal.clone());

                    this.faces.push(face);
                    this.faceVertexUvs[0].push([uvb.clone(), uvc, uvd.clone()]);

                }

            }

            // this.computeCentroids();

        };

        THREEx.Terrain.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);

        var renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: document.querySelector("#canvas3")
        });
        /* Fullscreen */
        renderer.setSize(window.innerWidth, window.innerHeight);
        /* Append to HTML */
        var onRenderFcts = [];
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.01, 1000);
        /* Play around with camera positioning */
        camera.position.z = 15;
        camera.position.y = 2;
        /* Fog provides depth to the landscape*/
        scene.fog = new THREE.Fog(0x000, 0, 45);
        (function() {
            var light = new THREE.AmbientLight(0x202020)
            scene.add(light)
            var light = new THREE.DirectionalLight('white', 5)
            light.position.set(0.5, 0.0, 2)
            scene.add(light)
            var light = new THREE.DirectionalLight('white', 0.75 * 2)
            light.position.set(-0.5, -0.5, -2)
            scene.add(light)
        })()
        var heightMap = THREEx.Terrain.allocateHeightMap(256, 256)
        THREEx.Terrain.simplexHeightMap(heightMap)
        var geometry = THREEx.Terrain.heightMapToPlaneGeometry(heightMap)
        THREEx.Terrain.heightMapToVertexColor(heightMap, geometry)
        /* Wireframe built-in color is white, no need to change that */
        var material = new THREE.MeshBasicMaterial({
            color: '#ffffff',
            wireframe: true
        });
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        mesh.lookAt(new THREE.Vector3(0, 1, 0));
        /* Play around with the scaling */
        mesh.scale.y = 3.5;
        mesh.scale.x = 3;
        mesh.scale.z = 0.20;
        mesh.scale.multiplyScalar(10);
        /* Play around with the camera */
        onRenderFcts.push(function(delta, now) {
            mesh.rotation.z += 0.025 * delta;
        })
        onRenderFcts.push(function() {
            renderer.render(scene, camera);
        })
        var lastTimeMsec = null
        requestAnimationFrame(function animate(nowMsec) {
            window.animID = requestAnimationFrame(animate);
            lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60
            var deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
            lastTimeMsec = nowMsec
            onRenderFcts.forEach(function(onRenderFct) {
                onRenderFct(deltaMsec / 1000, nowMsec / 1000)
            })
        })
    })
}
