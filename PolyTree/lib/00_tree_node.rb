class PolyTreeNode
  attr_accessor :value
  attr_reader :parent, :children

  def initialize(value=nil)
    @parent = nil;
    @children = [];
    @value = value;
  end


  def parent = (parent)
    @parent.children.delete(self)
    @parent = parent
    parent.children.push(self) unless parent.nil? || parent.children.include?(self)
  end

  def dfs(target)
    return self if self.value == target
    self.children.each do |child|
      result = child.dfs(target)
      return result unless result.nil?
    end
    nil
  end

  def bfs(target)
    queue = [self]

    while queue.length > 0
      node = queue.pop # node = queue.shift
      return node if node.value == target
      node.children.each do |child| # queue.concat(node.children)
        queue.unshift(child)
      end
    end
    nil
  end


end
