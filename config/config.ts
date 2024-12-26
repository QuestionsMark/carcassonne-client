import { Tile } from "../src/types";

export const CONFIG = {
    GRID_SIZE: 41,
    TILE_TYPES: [
        {
            tile: {
                _id: '1',
                contentMap: {
                    center: [],
                    church: true,
                    edges: [
                        ['grass', 'grass', 'grass'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'grass', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/1.png',
                shield: false,
                roadEnd: true,
            },
            count: 2,
        },
        {
            tile: {
                _id: '2',
                contentMap: {
                    center: [],
                    church: true,
                    edges: [
                        ['grass', 'grass', 'grass'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'grass', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/2.png',
                shield: false,
                roadEnd: false,
            },
            count: 4,
        },
        {
            tile: {
                _id: '3',
                contentMap: {
                    center: ['city'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['city', 'city', 'city'],
                        ['city', 'city', 'city'],
                        ['city', 'city', 'city'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/3.png',
                shield: true,
                roadEnd: false,
            },
            count: 1,
        },
        {
            tile: {
                _id: '4',
                contentMap: {
                    center: ['road', 'grass'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'road', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/4.png',
                shield: false,
                roadEnd: false,
            },
            count: 4,
        },
        {
            tile: {
                _id: '5',
                contentMap: {
                    center: ['grass'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'grass', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/5.png',
                shield: false,
                roadEnd: false,
            },
            count: 5,
        },
        {
            tile: {
                _id: '6',
                contentMap: {
                    center: ['city'],
                    church: false,
                    edges: [
                        ['grass', 'grass', 'grass'],
                        ['city', 'city', 'city'],
                        ['grass', 'grass', 'grass'],
                        ['city', 'city', 'city'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/6.png',
                shield: true,
                roadEnd: false,
            },
            count: 2,
        },
        {
            tile: {
                _id: '7',
                contentMap: {
                    center: ['city'],
                    church: false,
                    edges: [
                        ['grass', 'grass', 'grass'],
                        ['city', 'city', 'city'],
                        ['grass', 'grass', 'grass'],
                        ['city', 'city', 'city'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/7.png',
                shield: false,
                roadEnd: false,
            },
            count: 1,
        },
        {
            tile: {
                _id: '8',
                contentMap: {
                    center: ['grass'],
                    church: false,
                    edges: [
                        ['grass', 'grass', 'grass'],
                        ['city', 'city', 'city'],
                        ['grass', 'grass', 'grass'],
                        ['city', 'city', 'city'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/8.png',
                shield: false,
                roadEnd: false,
            },
            count: 3,
        },
        {
            tile: {
                _id: '9',
                contentMap: {
                    center: ['grass'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['city', 'city', 'city'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'grass', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/9.png',
                shield: false,
                roadEnd: false,
            },
            count: 2,
        },
        {
            tile: {
                _id: '10',
                contentMap: {
                    center: ['grass', 'road'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'grass', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/10.png',
                shield: false,
                roadEnd: false,
            },
            count: 3,
        },
        {
            tile: {
                _id: '11',
                contentMap: {
                    center: ['grass', 'road'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/11.png',
                shield: false,
                roadEnd: false,
            },
            count: 3,
        },
        {
            tile: {
                _id: '12',
                contentMap: {
                    center: [],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/12.png',
                shield: false,
                roadEnd: true,
            },
            count: 3,
        },
        {
            tile: {
                _id: '13',
                contentMap: {
                    center: ['grass', 'city'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['city', 'city', 'city'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'grass', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/13.png',
                shield: true,
                roadEnd: false,
            },
            count: 2,
        },
        {
            tile: {
                _id: '14',
                contentMap: {
                    center: ['grass', 'city'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['city', 'city', 'city'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'grass', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/14.png',
                shield: false,
                roadEnd: false,
            },
            count: 3,
        },
        {
            tile: {
                _id: '15',
                contentMap: {
                    center: ['city', 'road', 'grass'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['city', 'city', 'city'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/15.png',
                shield: true,
                roadEnd: false,
            },
            count: 2,
        },
        {
            tile: {
                _id: '16',
                contentMap: {
                    center: ['city', 'road', 'grass'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['city', 'city', 'city'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/16.png',
                shield: false,
                roadEnd: false,
            },
            count: 3,
        },
        {
            tile: {
                _id: '17',
                contentMap: {
                    center: ['city'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['city', 'city', 'city'],
                        ['grass', 'grass', 'grass'],
                        ['city', 'city', 'city'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/17.png',
                shield: true,
                roadEnd: false,
            },
            count: 1,
        },
        {
            tile: {
                _id: '18',
                contentMap: {
                    center: ['city'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['city', 'city', 'city'],
                        ['grass', 'grass', 'grass'],
                        ['city', 'city', 'city'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/18.png',
                shield: false,
                roadEnd: false,
            },
            count: 3,
        },
        {
            tile: {
                _id: '19',
                contentMap: {
                    center: ['city'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['city', 'city', 'city'],
                        ['grass', 'road', 'grass'],
                        ['city', 'city', 'city'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/19.png',
                shield: true,
                roadEnd: true,
            },
            count: 2,
        },
        {
            tile: {
                _id: '20',
                contentMap: {
                    center: ['city'],
                    church: false,
                    edges: [
                        ['city', 'city', 'city'],
                        ['city', 'city', 'city'],
                        ['grass', 'road', 'grass'],
                        ['city', 'city', 'city'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/20.png',
                shield: false,
                roadEnd: true,
            },
            count: 1,
        },
        {
            tile: {
                _id: '21',
                contentMap: {
                    center: ['grass', 'road'],
                    church: false,
                    edges: [
                        ['grass', 'road', 'grass'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'grass', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/21.png',
                shield: false,
                roadEnd: false,
            },
            count: 8,
        },
        {
            tile: {
                _id: '22',
                contentMap: {
                    center: ['grass', 'road'],
                    church: false,
                    edges: [
                        ['grass', 'grass', 'grass'],
                        ['grass', 'grass', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/22.png',
                shield: false,
                roadEnd: false,
            },
            count: 9,
        },
        {
            tile: {
                _id: '23',
                contentMap: {
                    center: [],
                    church: false,
                    edges: [
                        ['grass', 'grass', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/23.png',
                shield: false,
                roadEnd: true,
            },
            count: 4,
        },
        {
            tile: {
                _id: '24',
                contentMap: {
                    center: [],
                    church: false,
                    edges: [
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                        ['grass', 'road', 'grass'],
                    ],
                    farm: false,
                },
                src: '/src/assets/tiles/24.png',
                shield: false,
                roadEnd: true,
            },
            count: 1,
        },
    ] as { tile: Tile, count: number }[],
}