'use client' // is needed only if you’re using React Server Components
import * as LR from '@uploadcare/blocks';

LR.registerBlocks(LR);

function App() {
  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="3abd1ed3faa00bc396a7"
      />
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${LR.PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
      />
    </div>
  );
}

export default App;