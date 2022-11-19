const imgEntries1 = '../assets/revisando-masa.jpg'

// interface

interface myBlog {
    id: number
    title: string
    subtitle?: string
    categories: string[]
    tags?: string[]
    content: string
    image?: string
    date: string
}

export const entries: myBlog[] = [
    {
        id: 1,
        title: 'random',
        subtitle: 'sub',
        categories: ['pan'],
        tags: ['salado'],
        content: 'Que pan más güeno me comeré una vez compre esto.',
        image: imgEntries1,
        date: 'November 30, 2020',
    },
    {
        id: 1,
        title: 'random',
        subtitle: 'sub',
        categories: ['pan'],
        tags: ['salado'],
        content: 'Que pan más güeno me comeré una vez compre esto.',
        image: imgEntries1,
        date: 'November 30, 2020',
    },
    {
        id: 1,
        title: 'random',
        subtitle: 'sub',
        categories: ['pan'],
        tags: ['salado'],
        content: 'Que pan más güeno me comeré una vez compre esto.',
        image: imgEntries1,
        date: 'November 30, 2020',
    },
]
