import React from "react";
import Button from "@/components/Button";
import Menu from "@/components/Menu";
import Icon from "@/components/Icon";

const App: React.FC = () => {
	return (
		<>
			<div className={'App'}>
				<Menu defaultIndex={0} onSelect={(index) => console.log(index)} style={{margin: 20}} mode={'horizontal'}>
					<Menu.Item id={'0'}>
						menu0
					</Menu.Item>
					<Menu.Item id={'1'}>
						menu1
					</Menu.Item>
					<Menu.Item id={'2'}>
						menu2
					</Menu.Item>
					<Menu.SubItem title={'id'} id={'3'}>
						<Menu.Item id={'3-1'}>
							menu1
						</Menu.Item>
						<Menu.Item id={'3-2'}>
							menu1
						</Menu.Item>
					</Menu.SubItem>
				</Menu>

				<header className={'App-header'}>
					<Button>Default</Button>
					<Button buttonType={'primary'} onClick={() => console.log('Hello')} disabled>Primary</Button>
					<Button buttonType={'danger'}>Primary</Button>
					<Button buttonType={'link'} href={'/'}>link</Button>
				</header>
			</div>
		</>
	)
}

export default App
