
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!)


function render(props: any) {
  root.render(
    <StrictMode>
      <App {...props} />
    </StrictMode>
  )
}

if(!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

if((window as any).__POWERED_BY_QIANKUN__) {
  (window as any).myReactDemo = {
    bootstrap: async () => {
      console.log('react app bootstraped');
    },
    mount: async (props: any) => {
      const { container } = props;
      // 如果容器内没有 #root，就创建一个
      if (!container.querySelector('#root')) {
        const rootEl = document.createElement('div');
        rootEl.id = 'root';
        container.appendChild(rootEl);
      }
      const domContainer = container.querySelector('#root')!;
      const root = ReactDOM.createRoot(domContainer);
      root.render(<App />);
    },
    unmount: async () => {
      // root.unmount();
    },
  }
}