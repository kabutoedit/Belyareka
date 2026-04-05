import fetch from 'node-fetch'
import FormData from 'form-data'

const STRAPI_URL = 'https://belayareka.kg'
// Добавили .trim() для очистки токена от лишних пробелов/переносов
const TOKEN =
	'fe71bf377f4b109c9a457a50fa9526778814b20c86d401f7d78c7d4113b929346807d0c2c8f817f6eb5891825e70d6b8529a81315a35354ba5ed987e6e146ab06245fd4c9a81795c0f2492e0978af7b14c5626273846b759302aff764d06cbf0d3efd11cd91e9cc872274a322682b8785668094ba6454f819b247e772ace096a'.trim()

const headers = {
	Authorization: `Bearer ${TOKEN}`,
	'Content-Type': 'application/json',
}

const CDN_BASE = 'https://belaya-reka-storage.fra1.digitaloceanspaces.com'

// --- ДАННЫЕ (Категории и Продукты из вашего сообщения остаются без изменений) ---
const categories = [
	{ name: 'Молоко', bg: '#60c0e5' },
	{ name: 'Биокефир', bg: '#ffb459' },
	{ name: 'Кефир', bg: '#26AF98' },
	{ name: 'Чалап', bg: '#41c3cc' },
	{ name: 'Зернистый творог', bg: '#E58673' },
	{ name: 'Айран', bg: 'rgb(199, 211, 137)' },
	{ name: 'Сгущенка', bg: '#3998E5' },
	{ name: 'Сыр', bg: '#d9825b' },
	{ name: 'Десерт', bg: '#7cd9d1' },
	{ name: 'Творог', bg: '#8ECDDB' },
	{ name: 'Сметана', bg: '#9CC95C' },
	{ name: 'Йогурт', bg: '#73e5b6' },
	{ name: 'Томолок', bg: '#62ABCC' },
	{ name: 'Масло', bg: '#e1d1b9' },
	{ name: 'Bifi Life', bg: '#659c73' },
	{ name: 'BIGBatter', bg: '#d4c4b8' },
	{ name: 'BIGDessert', bg: '#d69a79' },
]

const products = [
	// Молоко
	{
		title: 'Молоко 3,2%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/09ws.webp`,
		className: '',
		isShow: true,
		volume: '1,0 л',
		weight: '3,2%',
		bg: '#60c0e5',
		category: 'Молоко',
	},
	{
		title: 'Молоко 2,5%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/08ws.webp`,
		className: '',
		isShow: false,
		volume: '1,0 л',
		weight: '2,5%',
		bg: '#60c0e5',
		category: 'Молоко',
	},
	{
		title: 'Молоко 3,2%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/11ws.webp`,
		className: 'catalog-md',
		isShow: false,
		volume: '1,0 л',
		weight: '3,2%',
		bg: '#60c0e5',
		category: 'Молоко',
	},
	{
		title: 'Молоко 2,5%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/10ws.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '1,0 л',
		weight: '2,5%',
		bg: '#60c0e5',
		category: 'Молоко',
	},
	// Биокефир
	{
		title: 'Биокефир ваниль',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/54ws.webp`,
		className: '',
		isShow: true,
		volume: '1,0 л',
		weight: '2,5%',
		bg: '#ffb459',
		category: 'Биокефир',
	},
	{
		title: 'Биокефир банан',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/47ws.webp`,
		className: '',
		isShow: false,
		volume: '1,0 л',
		weight: '2,5%',
		bg: '#e5e573',
		category: 'Биокефир',
	},
	{
		title: 'Биокефир смородина',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/03ws.webp`,
		className: '',
		isShow: false,
		volume: '1,0 л',
		weight: '2,5%',
		bg: '#9973e5',
		category: 'Биокефир',
	},
	{
		title: 'Биокефир клубника',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/02ws.webp`,
		className: '',
		isShow: false,
		volume: '1,0 л',
		weight: '2,5%',
		bg: '#e57373',
		category: 'Биокефир',
	},
	{
		title: 'Биокефир фруктовый микс',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/80ws.webp`,
		className: '',
		isShow: false,
		volume: '1,0 л',
		weight: '2,5%',
		bg: '#ffb459',
		category: 'Биокефир',
	},
	{
		title: 'Биокефир облепиха',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/81ws.webp`,
		className: '',
		isShow: false,
		volume: '1,0 л',
		weight: '2,5%',
		bg: '#ffb459',
		category: 'Биокефир',
	},
	// Кефир
	{
		title: 'Кефир 2,5%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/07ws.webp`,
		className: 'catalog-md',
		isShow: true,
		volume: '1,0 л',
		weight: '2,5%',
		bg: '#26AF98',
		category: 'Кефир',
	},
	{
		title: 'Кефир 1,0%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/06ws.webp`,
		className: 'catalog-md',
		isShow: false,
		volume: '1,0 л',
		weight: '1,0%',
		bg: '#26AF98',
		category: 'Кефир',
	},
	{
		title: 'Кефир 2,5%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/24ws.webp`,
		className: 'catalog-md',
		isShow: false,
		volume: '1,0 л',
		weight: '2,5%',
		bg: '#26AF98',
		category: 'Кефир',
	},
	{
		title: 'Кефир 1,0%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/25ws.webp`,
		className: 'catalog-md',
		isShow: false,
		volume: '1,0 л',
		weight: '1,0%',
		bg: '#26AF98',
		category: 'Кефир',
	},
	{
		title: 'Кефир 1%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/55ws.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '1,0 л',
		weight: '1%',
		bg: '#26AF98',
		category: 'Кефир',
	},
	// Чалап
	{
		title: 'Чалап',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/05ws.png`,
		className: 'catalog-sm mac:h-[480px]',
		isShow: true,
		volume: '200 г',
		weight: '2.5',
		bg: '#41c3cc',
		category: 'Чалап',
	},
	{
		title: 'Чалап',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/04ws.png`,
		className: 'h-[250px] ss:h-[380px] 2xl:h-[380px] mac:h-[480px]',
		isShow: false,
		volume: '200 г',
		weight: '2.5',
		bg: '#41c3cc',
		category: 'Чалап',
	},
	// Зернистый творог
	{
		title: 'Зернистый творог 9%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/53ws.webp`,
		className: 'catalog-lg',
		isShow: true,
		volume: '200 г',
		weight: '2.5',
		bg: '#E58673',
		category: 'Зернистый творог',
	},
	{
		title: 'Зернистый творог 5%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/52ws.png`,
		className: 'catalog-lg',
		isShow: false,
		volume: '200 г',
		weight: '2.5',
		bg: '#d7bf83',
		category: 'Зернистый творог',
	},
	// Айран
	{
		title: 'Домашний Айран',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/01ws.png`,
		className: 'catalog-sm',
		isShow: true,
		volume: '1,0 л',
		weight: '2.5',
		bg: 'rgb(199, 211, 137)',
		category: 'Айран',
	},
	{
		title: 'Айран клубника домашний',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/02ws.png`,
		className: 'catalog-sm',
		isShow: false,
		volume: '1,0 л',
		weight: '2.5',
		bg: 'rgb(199, 211, 137)',
		category: 'Айран',
	},
	{
		title: 'Айран персик домашний',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/ws03.png`,
		className: 'catalog-sm',
		isShow: false,
		volume: '1,0 л',
		weight: '2.5',
		bg: 'rgb(199, 211, 137)',
		category: 'Айран',
	},
	{
		title: 'Айран сладкий домашний',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/ws04.png`,
		className: 'catalog-sm',
		isShow: false,
		volume: '1,0 л',
		weight: '2.5',
		bg: 'rgb(199, 211, 137)',
		category: 'Айран',
	},
	{
		title: 'Айран вишня домашний',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/82ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '1,0 л',
		weight: '2.5',
		bg: 'rgb(199, 211, 137)',
		category: 'Айран',
	},
	{
		title: 'Айран киви домашний',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/83ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '1,0 л',
		weight: '2.5',
		bg: 'rgb(199, 211, 137)',
		category: 'Айран',
	},
	{
		title: 'Айран лесные ягоды домашний',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/84ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '1,0 л',
		weight: '2.5',
		bg: 'rgb(199, 211, 137)',
		category: 'Айран',
	},
	// Сгущенка
	{
		title: 'Сгущенка цельным молоком',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/23ws.png`,
		className: 'catalog-sm',
		isShow: true,
		volume: '400 г',
		weight: '2.5',
		bg: '#3998E5',
		category: 'Сгущенка',
	},
	{
		title: 'Сгущенка обезжиренное с сахаром',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/22ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '400 г',
		weight: '2.5',
		bg: '#3998E5',
		category: 'Сгущенка',
	},
	// Сыр
	{
		title: 'Сыр моцарелла',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/17ws.webp`,
		className: 'catalog-md',
		isShow: true,
		volume: '90 г',
		weight: '2,5%',
		bg: '#d9825b',
		category: 'Сыр',
	},
	{
		title: 'Сыр голландский',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/18ws.webp`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#529fc9',
		category: 'Сыр',
	},
	{
		title: 'Сыр российский',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/16ws.webp`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#c7ac71',
		category: 'Сыр',
	},
	{
		title: 'Чечил классический',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/10ns.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#d48d5c',
		category: 'Сыр',
	},
	{
		title: 'Чечил не копченый',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/11ns.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#f9b343',
		category: 'Сыр',
	},
	{
		title: 'Чечил с перцем',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/12ns.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#ef816f',
		category: 'Сыр',
	},
	{
		title: 'Сыр брынза',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/71ws.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#61933a',
		category: 'Сыр',
	},
	{
		title: 'Сыр голландский',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/70ns.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#84b4e2',
		category: 'Сыр',
	},
	{
		title: 'Сыр голландский',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/14ws_alt.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#337dc1',
		category: 'Сыр',
	},
	{
		title: 'Сыр моцарелла',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/15ws_alt.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#df5034',
		category: 'Сыр',
	},
	{
		title: 'Сыр российский',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/16ws_alt.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#c59848',
		category: 'Сыр',
	},
	{
		title: 'Сыр российский',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/17ws_alt.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#d8a657',
		category: 'Сыр',
	},
	{
		title: 'Сыр сулугуни копченый',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/18ws_alt.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#eb5e28',
		category: 'Сыр',
	},
	{
		title: 'Сыр сулугуни',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/19ws_alt.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#3bc2bc',
		category: 'Сыр',
	},
	{
		title: 'Сыр Колбасный',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/20ws_alt.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#dda37c',
		category: 'Сыр',
	},
	// Десерт
	{
		title: 'Десерт Персик-Маракуйя',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/31ws.webp`,
		className: 'catalog-sm',
		isShow: true,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#7cd9d1',
		category: 'Десерт',
	},
	{
		title: 'Десерт Семечка',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/36ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#ccc',
		category: 'Десерт',
	},
	{
		title: 'Десерт Фисташка',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/34ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#c8d977',
		category: 'Десерт',
	},
	{
		title: 'Десерт Ананас',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/33ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#ecd1c3',
		category: 'Десерт',
	},
	{
		title: 'Десерт Дыня',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/30ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#ffeb66',
		category: 'Десерт',
	},
	{
		title: 'Десерт Черника',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/29ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#73b6e5',
		category: 'Десерт',
	},
	{
		title: 'Десерт Банан',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/28ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#e5de73',
		category: 'Десерт',
	},
	{
		title: 'Десерт Абрикос-Манго',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/27ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#e57ee5',
		category: 'Десерт',
	},
	{
		title: 'Десерт Изюм',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/42ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#a39dc3',
		category: 'Десерт',
	},
	{
		title: 'Десерт Вишня',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/40ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#e5ac5c',
		category: 'Десерт',
	},
	{
		title: 'Десерт Ваниль',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/38ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#e5de73',
		category: 'Десерт',
	},
	{
		title: 'Десерт Клубника',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/37ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#e55c5c',
		category: 'Десерт',
	},
	{
		title: 'Десерт Шоколад',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/41ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#BE8C3C',
		category: 'Десерт',
	},
	{
		title: 'Десерт Арахис',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/32ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#bf8ae5',
		category: 'Десерт',
	},
	{
		title: 'Десерт Киви',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/35ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#c6e567',
		category: 'Десерт',
	},
	{
		title: 'Десерт Миндаль',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/26ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '2,5%',
		bg: '#e5ac39',
		category: 'Десерт',
	},
	// Творог
	{
		title: 'Творог 0%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/43ws.webp`,
		className: 'catalog-sm',
		isShow: true,
		volume: '400 г',
		weight: '0%',
		bg: '#8ECDDB',
		category: 'Творог',
	},
	{
		title: 'Творог 5%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/45ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '400 г',
		weight: '5%',
		bg: '#77D22D',
		category: 'Творог',
	},
	{
		title: 'Творог 9%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/46ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '400 г',
		weight: '9%',
		bg: '#DE822C',
		category: 'Творог',
	},
	{
		title: 'Творог 18%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/44ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '400 г',
		weight: '18%',
		bg: '#D98CA6',
		category: 'Творог',
	},
	// Сметана
	{
		title: 'Сметана 20%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/12ws.webp`,
		className: 'catalog-sm',
		isShow: true,
		volume: '400 гр',
		weight: '20%',
		bg: '#9CC95C',
		category: 'Сметана',
	},
	{
		title: 'Сметана 15%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/13ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '400 гр',
		weight: '15%',
		bg: '#41c5e6',
		category: 'Сметана',
	},
	{
		title: 'Сметана 20%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/14ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '20%',
		bg: '#7cc71c',
		category: 'Сметана',
	},
	{
		title: 'Сметана 15%',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/15ws.webp`,
		className: 'catalog-sm',
		isShow: false,
		volume: '200 гр',
		weight: '15%',
		bg: '#54b5d7',
		category: 'Сметана',
	},
	// Йогурт
	{
		title: 'Йогурт банан',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/19ws.png`,
		className: 'catalog-sm',
		isShow: true,
		volume: '90 г',
		weight: '2,5%',
		bg: '#73e5b6',
		category: 'Йогурт',
	},
	{
		title: 'Йогурт абрикос',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/20ws.png`,
		className: 'catalog-sm',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#e5a15c',
		category: 'Йогурт',
	},
	{
		title: 'Йогурт клубника',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/21ws.png`,
		className: 'catalog-sm',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#e58673',
		category: 'Йогурт',
	},
	{
		title: 'Йогурт шабдалы',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/72ws.png`,
		className: 'catalog-sm',
		isShow: false,
		volume: '90 г',
		weight: '2,5%',
		bg: '#dda572',
		category: 'Йогурт',
	},
	// Томолок
	{
		title: 'Томолок классический',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/50ws.png`,
		className: 'catalog-md',
		isShow: true,
		volume: '400 г',
		weight: '2,5%',
		bg: '#62ABCC',
		category: 'Томолок',
	},
	{
		title: 'Томолок брусника',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/49ws.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#db006f',
		category: 'Томолок',
	},
	{
		title: 'Томолок облепиха',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/51ws.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#df4b1a',
		category: 'Томолок',
	},
	{
		title: 'Томолок черника',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/48ws.png`,
		className: 'catalog-md',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#7b0e79',
		category: 'Томолок',
	},
	// Масло
	{
		title: 'Масло традиционное',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/10ns.webp`,
		className: 'catalog-xs',
		isShow: true,
		volume: '400 г',
		weight: '2,5%',
		bg: '#e1d1b9',
		category: 'Масло',
	},
	{
		title: 'Масло домашнее сливочное',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/37.webp`,
		className: 'catalog-xs',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#f4a498',
		category: 'Масло',
	},
	{
		title: 'Масло Крестьянское',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/38.webp`,
		className: 'catalog-xs',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#ecd849',
		category: 'Масло',
	},
	{
		title: 'Масло легкое',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/60ws.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#c5c7c8',
		category: 'Масло',
	},
	{
		title: 'Жогорку сапаттагы май',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/61ws.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#ececec',
		category: 'Масло',
	},
	{
		title: 'Каймак май женил',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/62ws.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#252525',
		category: 'Масло',
	},
	// Bifi Life
	{
		title: 'Bifi Life с кусочками ананаса',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/56ws.png`,
		className: 'catalog-xs',
		isShow: true,
		volume: '400 г',
		weight: '2,5%',
		bg: '#659c73',
		category: 'Bifi Life',
	},
	{
		title: 'Bifi Life с кусочками малина-землянина',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/57ws.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#e8609e',
		category: 'Bifi Life',
	},
	{
		title: 'Bifi Life с кусочками манго маракуя',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/58ws.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#a45373',
		category: 'Bifi Life',
	},
	{
		title: 'Bifi Life с кусочками дыни',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/59ws.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#b1ce7f',
		category: 'Bifi Life',
	},
	// BIGBatter
	{
		title: 'Масло традиционное',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/64ns.png`,
		className: 'catalog-xs',
		isShow: true,
		volume: '400 г',
		weight: '2,5%',
		bg: '#d4c4b8',
		category: 'BIGBatter',
	},
	{
		title: 'Жогорку сапаттагы май',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/63ns.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#ebebec',
		category: 'BIGBatter',
	},
	{
		title: 'Масло Крестьянское',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/65ns.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#dbd27d',
		category: 'BIGBatter',
	},
	{
		title: 'Масло легкое',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/79ns.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '400 г',
		weight: '2,5%',
		bg: '#dededf',
		category: 'BIGBatter',
	},
	// BIGDessert
	{
		title: 'Десерт Ананас',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/66ns.png`,
		className: 'catalog-xs',
		isShow: true,
		volume: '500 г',
		weight: '2,5%',
		bg: '#d69a79',
		category: 'BIGDessert',
	},
	{
		title: 'Десерт Банан',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/67ns.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '500 г',
		weight: '2,5%',
		bg: '#e5de73',
		category: 'BIGDessert',
	},
	{
		title: 'Десерт Киви',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/68ns.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '500 г',
		weight: '2,5%',
		bg: '#c8de69',
		category: 'BIGDessert',
	},
	{
		title: 'Десерт Клубника',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/69ns.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '500 г',
		weight: '2,5%',
		bg: '#e55c5c',
		category: 'BIGDessert',
	},
	{
		title: 'Десерт Мейиз',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/76ns.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '500 г',
		weight: '2,5%',
		bg: '#8080b5',
		category: 'BIGDessert',
	},
	{
		title: 'Десерт Кара орук',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/75ns.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '500 г',
		weight: '2,5%',
		bg: '#702a61',
		category: 'BIGDessert',
	},
	{
		title: 'Десерт Шоколад',
		img: `${CDN_BASE}/assets/media/picture/assets-epico/77ns.png`,
		className: 'catalog-xs',
		isShow: false,
		volume: '500 г',
		weight: '2,5%',
		bg: '#755136',
		category: 'BIGDessert',
	},
]

// --- ФУНКЦИИ ---

async function uploadImageFromUrl(imageUrl) {
	try {
		const res = await fetch(imageUrl)
		if (!res.ok) return null

		// Исправление для node-fetch v3: используем arrayBuffer
		const arrayBuffer = await res.arrayBuffer()
		const buffer = Buffer.from(arrayBuffer)
		const filename = imageUrl.split('/').pop()

		const form = new FormData()
		form.append('files', buffer, {
			filename,
			contentType: res.headers.get('content-type') || 'image/webp',
		})

		const uploadRes = await fetch(`${STRAPI_URL}/api/upload`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${TOKEN}`,
				...form.getHeaders(),
			},
			body: form,
		})

		const data = await uploadRes.json()
		return data[0]?.id ?? null
	} catch (err) {
		console.error('  ⚠ Image Upload Error:', err.message)
		return null
	}
}

async function ensureCategory(cat) {
	// 1. Ищем, существует ли уже категория
	const searchRes = await fetch(
		`${STRAPI_URL}/api/kategoriis?filters[name][$eq]=${encodeURIComponent(
			cat.name
		)}`,
		{ headers }
	)
	const searchData = await searchRes.json()

	if (searchData.data && searchData.data.length > 0) {
		return searchData.data[0].id // Возвращаем чистый ID
	}

	// 2. Если нет — создаем и сразу ПУБЛИКУЕМ
	const res = await fetch(`${STRAPI_URL}/api/kategoriis`, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			data: {
				name: cat.name,
				bg: cat.bg,
				publishedAt: new Date(), // Чтобы категория была активна сразу
			},
		}),
	})

	const data = await res.json()
	return data.data?.id ?? null
}

async function createProduct(product, categoryId, imageId) {
	// На всякий случай выведем в консоль, что мы отправляем
	// console.log(`Привязка ${product.title} к ID категории: ${categoryId}`);

	const body = {
		data: {
			name: product.title,
			className: product.className || '',
			isShow: !!product.isShow,
			volume: String(product.volume || ''),
			weight: String(product.weight || ''),
			bg: product.bg,

			// На вашем скриншоте API ID поля: category
			// Пробуем передать просто числом (самый вероятный вариант для вашей связи)
			category: categoryId ? Number(categoryId) : null,

			image: imageId || null,
			publishedAt: new Date(), // Сразу публикуем продукт
		},
	}

	const res = await fetch(`${STRAPI_URL}/api/products`, {
		method: 'POST',
		headers,
		body: JSON.stringify(body),
	})

	if (!res.ok) {
		const errorData = await res.json()
		console.warn(
			`  ❌ Ошибка: ${product.title}`,
			JSON.stringify(errorData.error, null, 2)
		)
	} else {
		console.log(`✓ Создан и привязан к ID: ${categoryId}`)
	}
}
async function main() {
	console.log('--- Phase 1: Categories ---')
	const categoryMap = {}

	for (const cat of categories) {
		const id = await ensureCategory(cat)
		if (id) {
			categoryMap[cat.name] = id
			console.log(`  ✓ Category: ${cat.name} (id: ${id})`)
		}
	}

	console.log('\n--- Phase 2: Products ---')
	for (const product of products) {
		process.stdout.write(`  → ${product.title}... `)

		const imageId = await uploadImageFromUrl(product.img)
		const categoryId = categoryMap[product.category] ?? null

		await createProduct(product, categoryId, imageId)

		// Пауза 200мс, чтобы Strapi успевал обрабатывать изображения
		await new Promise(r => setTimeout(r, 200))
	}

	console.log('\nDone!')
}

main().catch(err => console.error('FATAL:', err))
