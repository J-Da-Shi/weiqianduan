
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import largeFile from './largeFile.ts'
import LargeFile2 from './a.ts'
import LargeFile3 from './a copy.ts'
import LargeFile4 from './a copy 2.ts'
import LargeFile5 from './a copy 3.ts'
import LargeFile6 from './a copy 4.ts'
import LargeFile7 from './a copy 5.ts'
import LargeFile8 from './a copy 6.ts'
import LargeFile9 from './a copy 7.ts'
import LargeFile10 from './a copy 8.ts'
import LargeFile11 from './a copy 9.ts'

const root = createRoot(document.getElementById('root')!)

console.log('largeFile.js',LargeFile2, LargeFile3, LargeFile4, LargeFile5, LargeFile6, LargeFile7, LargeFile8, LargeFile9, LargeFile10, LargeFile11, largeFile);
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