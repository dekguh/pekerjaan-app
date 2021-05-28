import Title from "../../atomics/Title"
import HomeHeroSearch from "../../organisms/HomeHeroSearch"

const ContentLeft = () => {
    return (
        <div>
            <Title component='h1'>
                <span className='styled'>Temukan</span> Lowongan Kerja Terbaru
            </Title>
            <p>
                Temukan pekerjaan dengan mudah di pekerjaan.app, tersedia berbagai lowongan pekerjaan diseluruh indonesia dengan berbagai kategori
            </p>
            <HomeHeroSearch />
        </div>
    )
}

export default ContentLeft
