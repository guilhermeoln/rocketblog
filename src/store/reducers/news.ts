import { createSlice } from '@reduxjs/toolkit';


export type PropsNews = {
    image: string,
    date: string,
    title: string,
    subTitle: string
}

const initialState : PropsNews[] = [
    {
        image: 'https://i.postimg.cc/Y9YhntG8/post-2.png',
        date: 'Janeiro 04, 2022',
        title: '10 dicas para conseguir a vaga desejada',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. '
    },
    {
        image: 'https://i.postimg.cc/Y9YhntG8/post-2.png',
        date: 'Janeiro 04, 2022',
        title: 'Deixe seu código mais semântico com essas dicas',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.'
    },
    {
        image: 'https://i.postimg.cc/Y9YhntG8/post-2.png',
        date: 'Janeiro 04, 2022',
        title: 'Use essas dicas nas suas aplicações mobile',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.'
    }
]

const newsSlice = createSlice({
    name: 'news',
    initialState: initialState as PropsNews[],
    reducers: {}
})



export default newsSlice.reducer;