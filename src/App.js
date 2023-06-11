import React from "react";

import General from "./components/header/General"
import NewsHeader from "./components/header/generalNews/NewsHeader"
import CardNews from "./components/newsList/CardNews"
import NewsList from "./components/newsList/news/NewsList"
import Rates from "./components/ratesList/Rates"
import CurrencyRates from "./components/ratesList/currencyListRates/CurrencyRates"
import NavigationSearch from "./components/navigation/NavigationSearch"
import NavigationItemSearch from "./components/navigation/itemsSearch/NavigationItemSearch"
import SerpHeader from "./components/search/SerpHeader"
import SearchInput from "./components/search/userInput/SearchInput"
import YLogo from "./components/ylogo/YLogo"
import SampleText from "./components/strSearch/SampleText"
import TextTitle from "./components/strSearch/text/TextTitle"
import Banner from "./components/banner/Banner"
import NewsBlock from "./components/newsBlock/NewsBlock"
import VisitedList from "./components/newsBlock/visited/VisitedList"
import CardList from "./components/newsBlock/card/CardList"
import TVList from "./components/newsBlock/tv/TVList"
import Translation from "./components/newsBlock/online/Translation"


function App() {
	const listVisited = [
		{
			url: "https://dzen.ru/",
			title: "Недвижимость — ",
			name: "о сталинках"
		},			
		{
			url: "https://dzen.ru/",
			title: "Маркет — ",
			name: "люстры и светильники"
		},			
		{
			url: "https://dzen.ru/",
			title: "Авто.ру — ",
			name: "привод 4х4 до 500 000"
		},		
	]	
	
	const card = [
		{
			url: "https://dzen.ru/",
			title: "Расписание"
		}			
	]
	
	const tv = [
		{
			time: "02:00",
			name: "ТНТ.best",
			channel: "ТНТ international"
		},		
		{
			time: "02:15",
			name: "Джинглики",
			channel: "Карусель INT"
		},		
		{
			time: "02:25",
			name: "наедине со всеми",
			channel: "Первый"
		},
	]
	
	const online = [
		{
			icon: "https://visualpharm.com/assets/768/Circled%20Play-595b40b65ba036ed117d3dd6.svg",
			name: "Управление как искусство",
			channel: "Успех"
		},		
		{
			icon: "https://visualpharm.com/assets/768/Circled%20Play-595b40b65ba036ed117d3dd6.svg",
			name: "Ночь. Мир в это время",
			channel: "EarthTV"
		},		
		{
			icon: "https://visualpharm.com/assets/768/Circled%20Play-595b40b65ba036ed117d3dd6.svg",
			name: "Андрей Вознесенский",
			channel: "Совершенно секретно"
		},
	]
	
	return (
		<>
			<General>
				<NewsHeader />
			</General>
			<CardNews>
				<NewsList />
			</CardNews>			
			<Rates>
				<CurrencyRates />
			</Rates>			
			<NavigationSearch>
				<NavigationItemSearch />
			</NavigationSearch>			
			<YLogo />			
			<SerpHeader>
				<SearchInput />
			</SerpHeader>			
			<SampleText>
				<TextTitle />
			</SampleText>			
			<Banner />
			<div className="news__block">
				<div style={{ margin: "0 50px 50px 0" }}>
					<NewsBlock title="Посещаемое">
						<VisitedList listVisited={listVisited}/>
					</NewsBlock>
				</div>
				<div style={{ margin: "0 50px 50px 0" }}>
					<NewsBlock title="Карта Германии">
						<CardList card={card} />
					</NewsBlock>			
				</div>
				<div style={{ margin: "0 50px 50px 0" }}>
					<NewsBlock title="Телепрограмма">
						<TVList tv={tv} />
					</NewsBlock>
				</div>
				<div style={{ margin: "0 50px 50px 0" }}>
					<NewsBlock title="Эфир">
						<Translation online={online} />
					</NewsBlock>
				</div>
			</div>
		</>
	)
}

export default App