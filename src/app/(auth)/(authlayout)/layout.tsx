function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="bg-blue-500 p-5 mt-4 text-center">auth layout header</div>

			{children}

			<div className="bg-red-500 p-5 mb-4 text-center">auth layout footer</div>
		</>
	);
}

export default AuthLayout;
