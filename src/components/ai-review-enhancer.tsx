import { Button, Divider, Drawer, Spin, Typography } from "antd";
import React from "react";

import MarkDownPreview from "@/components/markdown-preview.tsx";

const { Title, Text } = Typography;

interface AIReviewEnhancerProps {
  originalContent: string;
  enhancedContent: string;
  suggestion: string; // 新增建议字段
  isLoading: boolean;
  onAccept?: (content: string) => void;
  onCancel?: () => void;
  open?: boolean;
}

const AIReviewEnhancer: React.FC<AIReviewEnhancerProps> = ({
  enhancedContent,
  suggestion,
  isLoading,
  onAccept,
  onCancel,
  open,
}) => {
  return (
    <Drawer
      open={open}
      onClose={onCancel}
      extra={
        <Button
          type="primary"
          onClick={() => {
            if (onAccept) onAccept(enhancedContent);
          }}
        >
          接受
        </Button>
      }
      title="AI润色建议"
      size="large"
    >
      {isLoading ? (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <Spin tip="AI正在润色评论..." />
        </div>
      ) : (
        <div>
          {suggestion && (
            <div style={{ marginBottom: 16 }}>
              <Title level={5}>AI建议：</Title>
              <Text>{suggestion}</Text>
              <Divider />
            </div>
          )}
          <Title level={5}>润色结果：</Title>
          <MarkDownPreview src={enhancedContent}></MarkDownPreview>
        </div>
      )}
    </Drawer>
  );
};

export default AIReviewEnhancer;
