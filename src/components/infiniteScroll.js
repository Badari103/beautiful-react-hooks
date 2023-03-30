import { useState, useRef } from 'react';
import { Alert, List, Typography } from 'antd';
import useInfiniteScroll from 'beautiful-react-hooks/useInfiniteScroll';

const generateRandomNo = () => Math.floor(Math.random() * 11)
const initialData = Array.from({ length: 40 }).map(generateRandomNo)


const fetchMock = (items = 10) => new Promise((resolve) => {
  setTimeout(() => {
    const data = Array.from({ length: items }).map(generateRandomNo)
    resolve(data)
  }, 1000)
})


const TestComponent = () => {
  const targetElementRef = useRef();
  const onInfiniteScroll = useInfiniteScroll(targetElementRef);
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState(initialData)

  onInfiniteScroll(() => {
    if (!isFetching) {
      setIsFetching(true)

      fetchMock()
              .then((next) => setData([...data, ...next]))
              .finally(() => setIsFetching(false))
    }
  })

  return (
        //   <DisplayDemo title="useInfiniteScroll">
            <div style={{ maxHeight: 250, overflow: 'scroll' }} ref={targetElementRef}>
              <div style={{ height: 500, position: 'relative' }}>
                <Alert type="info" message="Scroll to load more content" />
                <List
                        bordered
                        dataSource={data}
                        renderItem={(_, item) => (
                                <List.Item>
                                  <Typography.Text mark>mock item no: {item}</Typography.Text>
                                </List.Item>
                        )}
                />
                {isFetching && (
                        <div style={{ opacity: 0.6, textAlign: 'center', marginBottom: 20 }}>
                          Loading next data...
                        </div>
                )}
              </div>
            </div>
        //   </DisplayDemo>
  );
};

export default TestComponent;