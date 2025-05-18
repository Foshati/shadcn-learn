import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>سع</AvatarFallback>
        </Avatar>
        <div className="mr-4 space-y-1">
          <p className="text-sm font-medium leading-none">سعید احمدی</p>
          <p className="text-sm text-muted-foreground">
            saeed.ahmadi@example.com
          </p>
        </div>
        <div className="mr-auto font-medium">+۱,۲۵۰,۰۰۰ تومان</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>زه</AvatarFallback>
        </Avatar>
        <div className="mr-4 space-y-1">
          <p className="text-sm font-medium leading-none">زهرا محمدی</p>
          <p className="text-sm text-muted-foreground">
            zahra.mohammadi@example.com
          </p>
        </div>
        <div className="mr-auto font-medium">+۸۹۰,۰۰۰ تومان</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>عل</AvatarFallback>
        </Avatar>
        <div className="mr-4 space-y-1">
          <p className="text-sm font-medium leading-none">علی رضایی</p>
          <p className="text-sm text-muted-foreground">
            ali.rezaei@example.com
          </p>
        </div>
        <div className="mr-auto font-medium">+۲,۱۰۰,۰۰۰ تومان</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>فا</AvatarFallback>
        </Avatar>
        <div className="mr-4 space-y-1">
          <p className="text-sm font-medium leading-none">فاطمه حسینی</p>
          <p className="text-sm text-muted-foreground">
            fatemeh.hosseini@example.com
          </p>
        </div>
        <div className="mr-auto font-medium">+۱,۴۵۰,۰۰۰ تومان</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>مح</AvatarFallback>
        </Avatar>
        <div className="mr-4 space-y-1">
          <p className="text-sm font-medium leading-none">محمد کریمی</p>
          <p className="text-sm text-muted-foreground">
            mohammad.karimi@example.com
          </p>
        </div>
        <div className="mr-auto font-medium">+۱,۸۷۵,۰۰۰ تومان</div>
      </div>
    </div>
  );
}
